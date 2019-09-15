using System.Collections.Generic;
using System.Threading.Tasks;
using DefectsTracker.API.Models;

namespace DefectsTracker.API.Data
{
    public class DefectsRepository : IDefectsRepository
    {
        private readonly DataContext _context;
        public DefectsRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
             _context.Remove(entity);
        }

        public Task<User> GetUser()
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<User>> GetUsers()
        {
            throw new System.NotImplementedException();
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}