using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DMS.Data.Respositories
{
    public class UnitOfWork
    {
        public ContactRepo Contact { get; set; }

        public UnitOfWork()
        {
            Contact = new ContactRepo();
        }
    }
}
