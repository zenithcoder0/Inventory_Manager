using Microsoft.EntityFrameworkCore;
using InventoryManager.Models;
using Microsoft.AspNetCore.Http.Features;

namespace InventoryManager.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    public DbSet<Item> Items => Set<Item>();
}