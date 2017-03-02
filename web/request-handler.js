var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var URL = require('url');
// require more modules/folders here!



exports.handleRequest = function (req, res) {

  //initially show the landing page - index.html

  fs.readFile( __dirname + '/public/index.html', function (err, data) {
    if (err) {
      throw err; 
    } else {
      res.writeHead(200);
      res.end(data);
    }    
  });

   //we recieved a get request
  if (req.method === 'GET') {
   // parse the url 
    var parseURL = URL.parse(req.url, true);
    // if we recieve no path name? - no extra query strings
    if (parseURL.pathname === '/' || parseURL.pathname === '/favicon.ico') {
      // load index.html
      // console.log("IT WORKED!");
      fs.readFile( __dirname + '/public/index.html', function (err, data) {
        if (err) {
          throw err; 
        } else {
          res.writeHead(200);
          res.end(data);
        }    
      });
    }
    // if path name exists
    if (parseURL.pathname) {
      // call readListofURLS
        // this will give us a list of current URLS
        // check if URL is in the list (isURLInList)
          // if URL is in the list
            // if URL Archived (isURLArchived)
              // if it is not archived - return we are working on it
              // if it is archived - load the page
          // if URL is not in the list
            // add url onto to the list (addURLToList)
            // where does the worker (downloadURLs) fit in?
            // return - we are working on it     
    }
  }
};
