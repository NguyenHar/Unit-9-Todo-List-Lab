using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;

namespace Todo_Backend.Models
{
    public class TodoContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Todos> Todos { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=Todos;Trusted_Connection=True;TrustServerCertificate=True");
            }
        }
    }
}
