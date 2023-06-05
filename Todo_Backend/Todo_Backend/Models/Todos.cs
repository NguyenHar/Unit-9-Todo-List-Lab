using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Todo_Backend.Models
{
    public partial class Employee
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(20)]
        public string? Name { get; set; }
        [Range(0, 40)]
        public double? Hours { get; set; }
        [MaxLength(40)]
        public string? Title { get; set; }

    }

    public partial class Todos
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(25)]
        public string? Name { get; set; }
        [MaxLength(100)]
        public string? Description { get; set; }
        [ForeignKey("Employee")]
        public int? AssignedTo { get; set; }
        public bool? IsCompleted { get; set; }
    }
}
