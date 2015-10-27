using System.Web;
using System.Web.Optimization;

namespace DMS.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery.stellar.js",
                        "~/Content/masterslider/jquery.min.js",
                        "~/Content/masterslider/jquery.easing.min.js",
                        "~/Content/masterslider/masterslider.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/angular-material.css",
                      "~/Content/Main/main.css",
                      "~/Content/Slider/settings.css",
                      "~/Content/Slider/layers.css",
                      "~/Content/Slider/navigation.css",
                      "~/Content/animate.css",
                      "~/Content/masterslider/style/masterslider.css",
                      "~/Content/masterslider/skins/default/style.css",
                      "~/Content/laptopSlider/ms-laptop-style.css",
                      "~/Content/masterslider/skins/black-2/style.css",
                      "~/Content/desktop-style/ms-display-style.css",
                      "~/Content/text-rotator/simpletextrotator.css",
                      "~/Content/hamburger/angular-hamburger-toggle.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Scripts/angular.js",
                      "~/Scripts/angular-ui-router.js",
                      // Angular material stuff
                      "~/Scripts/angular-animate.js",
                      "~/Scripts/angular-aria.js",
                      "~/Scripts/angular-material.js",
                      "~/Scripts/angular-isotope.js",
                      // app files
                      "~/app/app.module.js",
                      "~/app/app.route.js",
                      // services
                      "~/app/components/index/indexService.js",
                      "~/app/components/about/aboutService.js",
                      "~/app/components/contact/contactService.js",
                      "~/app/components/education/educationService.js",
                      "~/app/components/services/servicesService.js",
                      "~/app/components/solutions/gaspro/gasproService.js",
                      "~/app/components/solutions/gastrak/gastrakService.js",
                      "~/app/components/solutions/energypro/energyproService.js",
                      // controllers
                      "~/app/components/index/indexController.js",
                      "~/app/components/about/aboutController.js",
                      "~/app/components/contact/contactController.js",
                      "~/app/components/education/educationController.js",
                      "~/app/components/services/servicesController.js",
                      "~/app/components/solutions/gaspro/gasproController.js",
                      "~/app/components/solutions/productsController.js",
                      "~/app/components/solutions/gastrak/gastrakController.js",
                      "~/app/components/solutions/energypro/energyproController.js",
                      "~/app/components/testimonials/testimonialsController.js",
                      "~/app/components/navbar/navBarController.js",
                      "~/Scripts/smoothScroll.js",
                      "~/Content/text-rotator/jquery.simple-text-rotator.js",
                      "~/Content/hamburger/angular-hamburger-toggle.js"));
        }
    }
}
