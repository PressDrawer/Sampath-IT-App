using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SampathIT_Test.Application;
using SampathIT_Test.Application.Dto;
using SampathIT_Test.Application.Interfaces;
using SampathIT_Test.Domain.Entities;
using SampathIT_Test.Domain.Enums;
using SampathIT_Test.Infrastructure.Data;
//using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace SampathIT_Test.Infrastructure.Repositories
{
    public class UserRepository : IUserAuthRepository, IUserRepository
    {
        private readonly SampathDbContext _context;
        private readonly PasswordHasher<User> _passwordHasher;
        private readonly ITokenService _tokenService;
        public UserRepository(SampathDbContext context, ITokenService tokenService) 
        {
            _context = context;
            _passwordHasher = new PasswordHasher<User>();
            _tokenService = tokenService;
        }
        public async Task<User> UserRegister(User user)
        {
            
                var _user = _context.Users.FirstOrDefault(u => u.Email == user.Email);
                if (_user == null)
                {
                    user.Password = _passwordHasher.HashPassword(user, user.Password);
                    //user.UserId = new Guid();
                    await _context.Users.AddAsync(user);
                    await _context.SaveChangesAsync();
                    return user;
                }
            
            return null;
        }
        public async Task<User> AuthenticateUser(LoginDto logindto)
        {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == logindto.Email);
            if (user != null)
            {
                var verificationResult = _passwordHasher.VerifyHashedPassword(user, user.Password, logindto.Password);
                if (verificationResult == PasswordVerificationResult.Success)
                {
                    return user;
                }
            }
            return null;
        }

        public async Task<IQueryable<User>> GetUsers(string? firstname, string? lastname, DateTime? dobrange, Gender? gender)
        {
            IQueryable<User> usersquery = _context.Users;
            if (!string.IsNullOrEmpty(firstname))
            {
                usersquery = usersquery.Where(u=>u.FirstName== firstname);  
            }

            if (!string.IsNullOrEmpty(lastname))
            {
                usersquery = usersquery.Where(u => u.LastName == lastname);
            }

            if (dobrange!=null)
            {
                usersquery = usersquery.Where(u => u.DateofBirth == dobrange);
            }

            if (gender != null)
            {
                usersquery = usersquery.Where(u => u.Gender == gender);
            }

            return usersquery.AsQueryable();

        }

        public async Task<User> UpdateUser(int id, User user)
        {
            var _user = _context.Users.FirstOrDefault(u => u.Id == id);
            if (_user != null) 
            {

                _user.Title = user.Title;
                _user.FirstName = string.IsNullOrEmpty(user.FirstName) ? _user.FirstName : user.FirstName;
                _user.LastName = string.IsNullOrEmpty(user.LastName) ? _user.LastName : user.LastName;
                _user.Gender = user.Gender;
                _user.Remark = string.IsNullOrEmpty(user.Remark) ? _user.Remark : user.Remark;
                

                //_context.Update(user);
                await _context.SaveChangesAsync();
                return _user;
                
            }
            return null;
        }

       
    }
}
