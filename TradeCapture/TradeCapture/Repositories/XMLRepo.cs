using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Xml;
using Newtonsoft.Json;

namespace TradeCapture.Repositories
{
    public class XMLRepo
    {
        private string _tradePath { get; set; }
        private string _marketPath { get; set; }
        private string _header { get; set; }
        private string _footer { get; set; }

        public XMLRepo()
        {
            _tradePath = @"\Trade.xml";
            _marketPath = @"\MarketData.xml";
            _header = "<TradeCaptureReport>";
            _footer = "</TradeCaptureReport>";
        }

        /// <summary>
        /// Reads data from file with given _tradePath.
        /// Returns all trades as list of strings.
        /// </summary>
        /// <returns>All trades as list of strings.</returns>
        public List<string> GetXMLTradesFromFile()
        {
            string fileText = File.ReadAllText(_tradePath);
            fileText.Replace(_header, "");
            fileText.Replace(_footer, "");
            List<string> tradesOnFile = fileText.Split(new string[] { "<Trade>", "</Trade>" }, StringSplitOptions.RemoveEmptyEntries).ToList();

            foreach(string trade in tradesOnFile)
            {
                Console.WriteLine(trade);
            }

            return tradesOnFile;
        }

        public void SaveTradeData(List<string> trades)
        {
            List<string> tradesOnFile = GetXMLTradesFromFile();
            List<string> tradesToAddToFile = new List<string>();

            if (trades != null)
            {
                foreach(string trade in trades)
                {
                    if(!tradesOnFile.Contains(trade))
                    {
                        tradesToAddToFile.Add(trade);
                    }
                }
                //tradesOnFile.Distinct();
            }

            File.WriteAllText(_tradePath, _header);
            if(tradesOnFile != null)
            {
                foreach(string trade in tradesOnFile)
                {
                    File.AppendAllText(_tradePath, trade);
                }
            }
            if(tradesToAddToFile != null)
            {
                foreach(string trade in tradesToAddToFile)
                {
                    File.AppendAllText(_tradePath, trade);
                }
            }
            File.AppendAllText(_tradePath, _footer);
        }

        public void SaveMarketData(List<string> markets)
        {
            //File.WriteAllText(_marketPath, market);
        }

        public XmlDocument ConvertJsonToXml(string s)
        {
            XmlDocument xml = JsonConvert.DeserializeXmlNode(s);

            return xml;
        }
    }
}