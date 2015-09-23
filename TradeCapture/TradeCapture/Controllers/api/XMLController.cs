using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Xml;
using TradeCapture.Repositories;

namespace TradeCapture.Controllers.api
{
    public class XMLController : ApiController
    {
        private XMLRepo _repo { get; set; }

        public XMLController()
        {
            _repo = new XMLRepo();
        }

        [ActionName("trades")]
        public IHttpActionResult PostTrades(string trades)
        {
            XmlDocument vm = _repo.ConvertJsonToXml(trades);

            return Ok(vm);
        }

        [ActionName("markets")]
        public IHttpActionResult PostMarkets(string markets)
        {
            XmlDocument vm = _repo.ConvertJsonToXml(markets);

            return Ok(vm);
        }
    }
}
