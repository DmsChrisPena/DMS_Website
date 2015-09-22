using DMS.Models.DomainModels;
using DMS.Models.ViewModels;
using SendGrid;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace DMS.Data.Respositories
{
    public class ContactRepo
    {
        private ApplicationDbContext _db { get; set; }

        public ContactRepo()
        {
            _db = new ApplicationDbContext();
        }

        public List<ContactTopicVM> GetContactTopics()
        {
            List<ContactTopicVM> vm = _db.ContactTopics.Where(t => !t.IsDeleted).Select(t => new ContactTopicVM
            {
                Id = t.Id,
                Topic = t.Topic
            }).ToList();

            return vm;
        }

        public void RequestInfo(ContactRequestVM vm)
        {
            ContactTopic topic = _db.ContactTopics.Where(t => t.Topic == vm.Topic).FirstOrDefault();

            if (topic != null)
            {
                SaveContactRequest(vm, topic);
                SendCustomerEmail(vm);
                SendHelpTeamEmail(vm);
            }
        }

        private void SaveContactRequest(ContactRequestVM vm, ContactTopic topic)
        {
            ContactRequest request = new ContactRequest
            {
                Name = vm.Name,
                Email = vm.Email,
                Message = vm.Message,
                Topic = topic
            };

            _db.ContactRequests.Add(request);
            _db.SaveChanges();
        }

        private void SendCustomerEmail(ContactRequestVM vm)
        {
            // Create the email object first, then add the properties.
            SendGridMessage myMessage = new SendGridMessage();

            // Add the message properties.
            myMessage.From = new MailAddress("DMSHelp@dmshouston.com", "The DMS Team");
            string recipient = vm.Email;
            myMessage.AddTo(recipient);
            myMessage.Subject = "Thank You for Your Inquiry";

            //Add the HTML and Text bodies
            myMessage.Html = GetCustomerMessage(vm);
            //myMessage.Text = "Hello World plain text!";
            //myMessage.AddAttachment(@"C:\file1.txt");

            // Create credentials, specifying your user name and password.
            NetworkCredential credentials = new NetworkCredential("dmshouston", "$tr0ngB4d3mail");

            // Create an Web transport for sending email.
            SendGrid.Web transportWeb = new SendGrid.Web("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");

            // Send the email.
            // You can also use the **DeliverAsync** method, which returns an awaitable task.
            transportWeb.DeliverAsync(myMessage);
        }

        private string GetCustomerMessage(ContactRequestVM vm)
        {
            string message = null;

            try
            {
                message = File.ReadAllText("/DMS_Website/DMS/DMS.Web/App_Data/Email/CustomerMessage.txt");
                //string path = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), @"/DMS_Website/DMS/DMS.Web/App_Data/Email/CustomerMessage.txt");
                message = File.ReadAllText("/Users/cpena1/documents/DMS_Website/DMS/DMS.Web/App_Data/Email/CustomerMessage.txt");
            }
            catch (Exception ex)
            {
                return ex.Message;
            }

            message = message.Replace("{{name}}", vm.Name);
            message = message.Replace("{{topic}}", vm.Topic);

            return message;
        }

        private void SendHelpTeamEmail(ContactRequestVM vm)
        {
            // Create the email object first, then add the properties.
            SendGridMessage myMessage = new SendGridMessage();

            // Add the message properties.
            myMessage.From = new MailAddress("DMSHelp@dmshouston.com", "DMS Online");
            //string recipient = "DMSHelp@dmshouston.com";
            string recipient = vm.Email;
            myMessage.AddTo(recipient);
            myMessage.Subject = "New Online Request";

            //Add the HTML and Text bodies
            myMessage.Html = GetHelpTeamMessage(vm);
            //myMessage.Text = "Hello World plain text!";
            //myMessage.AddAttachment(@"C:\file1.txt");

            // Create credentials, specifying your user name and password.
            NetworkCredential credentials = new NetworkCredential("dmshouston", "$tr0ngB4d3mail");

            // Create an Web transport for sending email.
            SendGrid.Web transportWeb = new SendGrid.Web("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");

            // Send the email.
            // You can also use the **DeliverAsync** method, which returns an awaitable task.
            transportWeb.DeliverAsync(myMessage);
        }

        private string GetHelpTeamMessage(ContactRequestVM vm)
        {
            string message = null;

            try
            {
                message = File.ReadAllText("/DMS_Website/DMS/DMS.Web/App_Data/Email/HelpTeamMessage.txt");
                //string path = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), @"/DMS_Website/DMS/DMS.Web/App_Data/Email/HelpTeamMessage.txt");
                message = File.ReadAllText("/Users/cpena1/documents/DMS_Website/DMS/DMS.Web/App_Data/Email/HelpTeamMessage.txt");
            }
            catch (Exception ex)
            {
                return ex.Message;
            }

            message = message.Replace("{{topic}}", vm.Topic);
            message = message.Replace("{{name}}", vm.Name);
            message = message.Replace("{{email}}", vm.Email);
            message = message.Replace("{{message}}", vm.Message);

            return message;
        }
    }
}
