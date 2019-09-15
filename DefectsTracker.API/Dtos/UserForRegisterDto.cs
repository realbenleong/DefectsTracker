using System;
using System.ComponentModel.DataAnnotations;

namespace DefectsTracker.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        public string Password { get; set; }
        public string LotId { get; set; }
        public string ReasonOnHold { get; set; }
        public DateTime TimeOfEntry { get; set; }
    }
}