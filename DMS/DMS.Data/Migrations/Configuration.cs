namespace DMS.Data.Migrations
{
    using Models.DomainModels;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<DMS.Data.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ApplicationDbContext context)
        {
            ContactTopic[] topics = new ContactTopic[]
            {
                new ContactTopic {Topic = "Demos" },
                new ContactTopic {Topic = "Products" },
                new ContactTopic {Topic = "Services" },
                new ContactTopic {Topic = "Education" }
            };

            context.ContactTopics.AddOrUpdate(t => t.Topic, topics);
        }
    }
}
