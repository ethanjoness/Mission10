using BowlingAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BowlingAPI.Data;

public class BowlingContext : DbContext
{
    public BowlingContext(DbContextOptions<BowlingContext> options) : base(options) { }

    public DbSet<Bowler> Bowlers { get; set; }
    public DbSet<Team> Teams { get; set; }
}