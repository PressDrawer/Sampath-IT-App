using SampathIT_Test.Domain.Entities;
using SampathIT_Test.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampathIT_Test.Application.Interfaces
{
    public interface IUserRepository
    {
        Task <IQueryable<User>> GetUsers(string? firstname, string? lastname, DateTime? dobrange,Gender? gender);
        Task<User> UpdateUser(int id,User user);
    }
}
