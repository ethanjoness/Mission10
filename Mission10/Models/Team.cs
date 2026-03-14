using System.ComponentModel.DataAnnotations;

namespace BowlingAPI.Models;

public class Team
{
    [Key]
    public int TeamID { get; set; }
    [Required]
    public string TeamName { get; set; } = null!;
}