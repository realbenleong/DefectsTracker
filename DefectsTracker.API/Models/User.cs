using System;

namespace DefectsTracker.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string LotId { get; set; }
        public string ReasonOnHold { get; set; }
        public DateTime TimeOfEntry { get; set; }
    }
}