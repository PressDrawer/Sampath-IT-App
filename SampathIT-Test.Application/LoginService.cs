using Microsoft.AspNetCore.Identity;
using SampathIT_Test.Application.Dto;
using SampathIT_Test.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampathIT_Test.Application
{
    public class LoginService : ILoginService
    {
        private readonly IUserAuthRepository _authrepo;
        private readonly ITokenService _tokenservice;
        public LoginService(IUserAuthRepository authrepo, ITokenService tokenService) 
        { 
            _authrepo= authrepo;
            _tokenservice= tokenService;
        }
        public async Task<LoginResponceDto> UserLogin(LoginDto loginDto)
        {
            var user = await _authrepo.AuthenticateUser(loginDto);

            if (user!=null)
            {
                var token = _tokenservice.GenerateToken(loginDto);
                var loginResponce = new LoginResponceDto()
                {
                    Id = user.Id,
                    Email = user.Email,
                    token = token

                };
                return loginResponce;
            }
            return null;
        }
    }
}
