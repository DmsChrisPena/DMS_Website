using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DMS.Models.ViewModels
{
    public class ContactRequestVM
    {
        public string Name { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        public string Message { get; set; }

        [Required]
        public string Topic { get; set; }
    }

    public class ContactTopicVM
    {
        public int Id { get; set; }
        public string Topic { get; set; }
    }
}
