using System.Collections.Generic;
using System.Threading.Tasks;
using DefectsTracker.API.Models;

namespace DefectsTracker.API.Data
{
    public interface IDefectsRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();         
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser();
    }
}