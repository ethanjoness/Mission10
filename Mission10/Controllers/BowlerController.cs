using BowlingAPI.Data;
using BowlingAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BowlingAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BowlerController : ControllerBase
{
    private readonly BowlingContext _context;

    public BowlerController(BowlingContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IEnumerable<Bowler> Get()
    {
        var filteredData = _context.Bowlers
            .Include(x => x.Team)
            .Where(x => x.Team.TeamName == "Marlins" || x.Team.TeamName == "Sharks")
            .ToArray();

        return filteredData;
    }
}