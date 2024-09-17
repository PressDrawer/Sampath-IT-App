using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SampathIT_Test.Application.Dto;
using SampathIT_Test.Application.Interfaces;
using SampathIT_Test.Domain.Entities;
using SampathIT_Test.Domain.Enums;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SampathIT_Test.Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserAuthRepository _authrepo;
        private readonly ILoginService _loginService;
        private readonly IUserRepository _userRepository;   
        public UserController(IUserAuthRepository authrepo, ILoginService loginService, IUserRepository userRepo)
        {
            _authrepo = authrepo;
            _loginService = loginService;
            _userRepository = userRepo;
        }
        //User Register
        [HttpPost("Register")]
        public async Task<ActionResult<User>> RegisterUser(User user) 
        {
            var _user = await _authrepo.UserRegister(user);
            if (_user != null) return Ok(user);
            return BadRequest();
              
        }

        //Login user
        [HttpPost("Login")]
        public async Task<ActionResult<string>> UserLogin(LoginDto loginDto)
        {
            var token = await _loginService.UserLogin(loginDto);
            if (token != null) return Ok(token);
            return Unauthorized("Please logged in");
        }

        //Search users by .....
        [HttpPost("GetUsers")]
        
        public async Task<ActionResult<IQueryable<User>>> GetUsersbySearch([FromQuery] string? firstName, [FromQuery] string? lastName, [FromQuery] DateTime? dateofbirth,[FromQuery] Gender? gender)
        {
            var users = await _userRepository.GetUsers(firstName, lastName, dateofbirth, gender);    
            if(users != null) return Ok(users);
            return NotFound();
        }

        //Update a User
        [HttpPut("updateuser/{id}")]
        [Authorize]
        public async Task<ActionResult<User>> UpdateUser(int id,[FromBody] User user)
        {
            var _user = await _userRepository.UpdateUser(id, user);
            if (_user != null) return Ok(_user);
            return BadRequest();

        }


    }
}
