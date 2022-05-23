// Import the two dependencies
const express = require("express");


// Create an app for the top-level domain
const app = express();






app.use(function(req, res, next) {
  if (!req.subdomains.length || req.subdomains.slice(-1)[0] === 'www') return next();
  // otherwise we have subdomain here
  var subdomain = req.subdomains.slice(-1)[0];
  // keep it
  req.subdomain = subdomain;
  next();
});


// render a page
app.get('/', function(req, res) {
  // no subdomain
  if (!req.subdomain) {
    // render landing page
    res.send('home');
  } else {
    // render subdomain specific data
    res.send('user-page');
  }
});





// start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`server is running at 127.0.0.1:${PORT}`));






















