//Necessary namespaces
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InventoryManager.Data;
using InventoryManager.Models;
using Microsoft.AspNetCore.Components.Forms;

namespace InventoryManager.Controllers
{


    [ApiController]
    [Route("api/[controller]")]
    public class ItemsController : ControllerBase
    {
        private readonly AppDbContext _context;

        //Constructor injects the database context (dependency injection)
        public ItemsController(AppDbContext context)
        {
            _context = context;
        }

        //Get all items 
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Item>>> GetItems()
        {
            //Select * From items
            return await _context.Items.ToArrayAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Item>> GetItem(int id)
        {
            var item = await _context.Items.FindAsync(id);
            if (item == null) return NotFound();
            return item;
        }

        [HttpPost]
        public async Task<ActionResult<Item>> CreateItem(Item item)
        {
            _context.Items.Add(item); //Add the new item to the context
            await _context.SaveChangesAsync(); //Insert into items table
            return CreatedAtAction(nameof(GetItems), new { id = item.Id }, item); //Return 201 created with location
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateItem(int id, Item item)
        {
            if (id != item.Id) return BadRequest(); //URLID and item id match
            _context.Entry(item).State = EntityState.Modified;//Update this record
            await _context.SaveChangesAsync(); //Update items set
            return NoContent(); //Return 204
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteItem(int id)
        {
            var item = await _context.Items.FindAsync(id); //Find item by id
            if (item == null) return NotFound(); //If not found return 404
            _context.Items.Remove(item); //Mark for deletion
            await _context.SaveChangesAsync(); //Delete from items table
            return NoContent(); // Return 204 no content
        }
    }
}