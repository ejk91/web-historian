var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  //retrieves list of Urls (in queue?)
};

exports.isUrlInList = function(url, callback) {
  // calls readListofUrls to gain list
  // checks if given url is in the list
  // return boolean
};

exports.addUrlToList = function(url, callback) {
  // if isURLInList is false
    // we add URL to list
};

exports.isUrlArchived = function(url, callback) {
  // if isURLInList is true
    // check in archives to see if url files exists
      // if true - load the page
      // if false - say we are working on
};

exports.downloadUrls = function(urls) {
  //is this the worker functionality
  // worker will download url that is urlList
  // archive that url
};
