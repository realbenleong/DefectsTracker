using System;
using System.Threading.Tasks;
using DefectsTracker.API.Models;

namespace DefectsTracker.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string lotid, string reasonforhold, DateTime timeofentry);
    }
}