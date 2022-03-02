using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace CrudApi.Models
{
    [Table("Category")]
    public class Category 
    {

        [Column("Id")]
        [Display(Name = "Código")]
        public int Id { get; set; }

        [Column("Name")]
        [Display(Name = "Nome")]
        public string Name { get; set; }

        [Column("Description")]
        [Display(Name = "Descrição")]
        public string Description { get; set; }

        public static bool CategoryExists(Context context, int id)
        {
            return context.Categories.Any(e => e.Id == id);
        }

    }
}