var bodyParser = require('body-parser'); //body-parser module
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

app.enable('trust proxy'); //Can use req.ip to get client ip

//I can get the IP address, preferred languages (from header Accept-Language)
//and system infos (from header User-Agent) for my device.

//Mount the Logger middleware here
app.use(function(req, res, next){
 console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
});

app.use(bodyParser.urlencoded({extended: false}));

//The ISO 8601 syntax (YYYY-MM-DD) is the preferred JavaScript date format:
app.get('/api/whoami/:date_string?', (req, res) => {
  //req.get() Returns the specified HTTP request header field
  let software = req.get('User-Agent'); //software used by client
  let language = req.get('Accept-Language'); //language used by client
  let ip = req.ip; //client ip
  //console.log(date_string);
  res.json({"ipaddress":ip,"language":language,
"software":software});
  
});

/** Redirecting home to api/whoami */
app.get('/', (req, res, /*next*/) => {
  res.redirect('/api/whoami/');
  //next();
});

app.listen(process.env.PORT || 3000 );
