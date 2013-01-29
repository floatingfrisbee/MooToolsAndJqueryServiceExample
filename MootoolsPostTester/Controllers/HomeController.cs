using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using MootoolsPostTester.ViewModels;

namespace MootoolsPostTester.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SaveStuff(string stuff)
        {
            var mystring = stuff;

            if (null != mystring && mystring.ToCharArray().Any(chara => chara == 100))
            {
                throw new NotImplementedException();
            }

            return Json(new {success = true, message = "You the man!"});
        }

        [HttpPost]
        public ActionResult SaveComplexStuff(Person person)
        {
            if (null != person && person.Name == "Jaspreet")
            {
                throw new NotImplementedException();
            }

            return Json(new { success = true, message = "You the man!" });
        }

        [HttpPost]
        public ActionResult SaveAListOfStuff(IEnumerable<string> listOfStuff)
        {
            if (null != listOfStuff)
            {
                if (listOfStuff.Any(item => item == "opspark"))
                {
                    throw new NotImplementedException();
                }
            }

            return Json(new { success = true, message = "You the man!" });
        }
    }
}