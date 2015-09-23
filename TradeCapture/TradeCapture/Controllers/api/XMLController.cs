using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Xml;
using TradeCapture.Models;
using TradeCapture.Repositories;

namespace TradeCapture.Controllers.api
{
    public class XmlController : ApiController
    {
        private XMLRepo _repo { get; set; }

        public XmlController()
        {
            _repo = new XMLRepo();
        }

        [ActionName("trades")]
        [HttpPost]
        public IHttpActionResult PostTrades(TradeVM data)
        {
            XmlDocument vm = _repo.ConvertJsonToXml(data.Trades);

            return Ok(vm);
        }

        [ActionName("markets")]
        [HttpPost]
        public IHttpActionResult PostMarkets(MarketVM data)
        {
            XmlDocument vm = _repo.ConvertJsonToXml(data.Markets);

            return Ok(vm);
        }
    }
}
