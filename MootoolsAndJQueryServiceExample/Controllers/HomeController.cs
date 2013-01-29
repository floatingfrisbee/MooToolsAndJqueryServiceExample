using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using MootoolsAndJQueryServiceExample.ViewModels;

namespace MootoolsAndJQueryServiceExample.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SaveStuff(string stuff)
        {
            if (string.IsNullOrWhiteSpace(stuff))
                throw new Exception("We should have gotten a valid string");

            // Do stuff with the string

            return Json(new {Success = true, Message = string.Format("Got {0}!", stuff)});
        }

        [HttpPost]
        public ActionResult SaveComplexStuff(Person person)
        {
            if (null == person)
                throw new Exception("We should have gotten a valid person object");
            
            // Do stuff with person

            return Json(new { Success = true, Message = string.Format("Got {0}!", person.Name) });
        }

        [HttpPost]
        public ActionResult SaveAListOfStuff(IEnumerable<string> listOfStuff)
        {
            if (null == listOfStuff || !listOfStuff.Any())
                throw new Exception("We should have gotten a list with atleast one element in it.");

            // Do stuff with the list

            return Json(new { Success = true, Message = string.Format("Got {0}!", listOfStuff.Aggregate((a, b) => string.Format("{0}, {1}", a, b))) });
        }
    }
}