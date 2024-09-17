using SampathIT_Test.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampathIT_Test.Application.Dto
{
    public class SearchDto
    {
        public string? firstName { get; set; }
        public string? lastName { get; set; }
        public DateTime? dateofbirth { get; set; } 
        public Gender? gender { get; set; } 
    }
}
