using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CrudApi.Models
{
    [Table("Product")]
    public class Product 
    {
     
        [Column("Id")]
        [Display(Name="Código")]
        public int Id { get; set; }

        [Column("Name")]
        [Display(Name = "Nome")]
        public string Name { get; set; }

        [Column("Description")]
        [Display(Name = "Descrição")]
        public string Description { get; set; }

        [Column("Value")]
        [Display(Name = "Valor")]
        public double Value { get; set; }

        [Column("Brand")]
        [Display(Name = "Marca")]
        public string Brand { get; set; }

        [Column("Category_Id")]
        [Display(Name = "Categoria")]
        public int Category_Id { get; set; }

        public static bool ProductExists(Context context, int id)
        {
            return context.Products.Any(e => e.Id == id);
        }

        public static async Task<List<Product>> GetProductByCategory(Context context, int categoryId)
        {

            return await context.Products.Where(x => x.Category_Id == categoryId).ToListAsync();

        }

    }
}