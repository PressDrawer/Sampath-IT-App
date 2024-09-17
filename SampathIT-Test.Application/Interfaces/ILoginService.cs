using SampathIT_Test.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampathIT_Test.Application.Interfaces
{
    public interface ILoginService
    {
        Task<LoginResponceDto> UserLogin(LoginDto loginDto);
    }
}
