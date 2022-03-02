
using Microsoft.EntityFrameworkCore;

namespace CrudApi.Models
{
    public class Context : DbContext
    {

        public Context(DbContextOptions<Context> contextOptions) : base(contextOptions)
        {
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<Category> Categories { get; set; }

    }
}