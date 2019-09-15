using System;
using System.Threading.Tasks;
using DefectsTracker.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DefectsTracker.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;
        public AuthRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<User> Register(User user, string lotid, string reasonforhold, DateTime timeofentry)
        {
            user.LotId = lotid;
            user.ReasonOnHold = reasonforhold;
            user.TimeOfEntry = DateTime.Now;

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<bool> UserExists(string username)
        {
            if (await _context.Users.AnyAsync(x => x.Username == username))
            {
                return true;
            }

            return false;
        }
    }
}