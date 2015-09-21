using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DMS.Models.DomainModels
{


    public class ContactRequest : Universe
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }

        [ForeignKey("Topic")]
        public int TopicId { get; set; }
        public virtual ContactTopic Topic { get; set; }
    }

    public class ContactTopic : Universe
    {
        public string Topic { get; set; }

        public virtual ICollection<ContactRequest> Requests { get; set; }
    }
}
