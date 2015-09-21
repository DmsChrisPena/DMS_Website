using DMS.Data.Respositories;
using DMS.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DMS.Web.Controllers.api
{
    public class ContactController : ApiController
    {
        private UnitOfWork _unit { get; set; }

        public ContactController()
        {
            _unit = new UnitOfWork();
        }

        [ActionName("topics")]
        public IHttpActionResult GetTopics()
        {
            var vm = _unit.Contact.GetContactTopics();

            return Ok(vm);
        }

        [ActionName("request")]
        public IHttpActionResult PostRequest(ContactRequestVM vm)
        {
            if(ModelState.IsValid)
            {
                _unit.Contact.RequestInfo(vm);

                return Ok();
            }
            return BadRequest(ModelState);
        }
    }
}
