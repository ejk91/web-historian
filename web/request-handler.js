var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var URL = require('url');
var http = require('./http-helpers.js');
// require more modules/folders here!



exports.handleRequest = function (req, res) {

  //initially show the landing page - index.html
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
          console.log(err); 
        } else {
          res.writeHead(200, http.headers);
          res.end(data);
        }    
      });
    } else {
      // we need to check archives/sites if the file exists
      fs.readFile( archive.paths.archivedSites + parseURL.pathname, function (err, data) {
        if (err) {
          res.writeHead(404, http.headers);
          res.end();
        } else {
          res.writeHead(200, http.headers);
          res.end(data);
        }    
      });
      // if true
        // read the requested file
      // if false
        // return 404 error
    }

  }



    // this is post request 
    // if path name exists
  // if (parseURL.pathname) {
    // call readListofURLS
    // archive.readListOfUrls('callback');
    // archive.addUrlToList(parseURL.pathname);
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
};
