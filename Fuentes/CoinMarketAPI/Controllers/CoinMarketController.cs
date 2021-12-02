using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;


namespace CoinMarketApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CoinMarketApiController : Controller
    {
      
        private readonly ILogger<CoinMarketApiController> _logger;
        private readonly IConfiguration Configuration;


        public CoinMarketApiController(ILogger<CoinMarketApiController> logger, IConfiguration configuration)
        {
            Configuration = configuration;
            _logger = logger;
        }

        [HttpGet]
        public string Get(string convert)
        {
            var CoinAppApiKey = Configuration["CoinMarketApiKey"];
            var URL = new UriBuilder("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest");

            var queryString = HttpUtility.ParseQueryString(string.Empty);
            queryString["start"] = "1";
            queryString["limit"] = "10";
            queryString["convert"] = "USD";

            if (!string.IsNullOrEmpty(convert))
            {
                queryString["convert"] = convert;

            }
            URL.Query = queryString.ToString();

            try
            {
                var client = new WebClient();
                client.Headers.Add("X-CMC_PRO_API_KEY", CoinAppApiKey);
                client.Headers.Add("Accepts", "application/json");
                return client.DownloadString(URL.ToString());
            }
            catch (Exception e)
            {
                return e.Message;

            }
           

        }
    }
}
