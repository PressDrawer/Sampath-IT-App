using SampathIT_Test.Application.Dto;
using SampathIT_Test.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampathIT_Test.Application.Interfaces
{
    public interface IUserAuthRepository
    {
        Task<User> UserRegister(User user);
        Task<User> AuthenticateUser(LoginDto logindto);
        //Task<string> UserLogin(LoginDto loginDto);
    }
}
