using Microsoft.EntityFrameworkCore;
using SampathIT_Test.Domain.Entities;

namespace SampathIT_Test.Infrastructure.Data
{
    public class SampathDbContext : DbContext
    {
        public SampathDbContext(DbContextOptions<SampathDbContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                 .Property(f => f.Id)
                 .ValueGeneratedOnAdd();

        }
    }
}
