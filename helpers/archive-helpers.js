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
  fs.readFile(exports.paths['list'], function (err, data) {
    if (err) { 
      console.log(err);
      throw err; 
    } else {
      var urls = data.toString().split('\n');
      callback(urls);
    } 
  });

};

exports.isUrlInList = function(url, callback) { //REVIEW

  var checkTheList = function(results) {
    for (var i = 0; i < results.length; i++) {
      if (results[i] === url) {
        return callback(true);
      }
    }
    return callback(false);
  };

  exports.readListOfUrls(checkTheList); //WE CAN DO THIS BUT WITH CALLBACKS - we need it to finish running before going to next line
  // calls readListofUrls to gain list
  // fs.readFile(exports.paths['list'], function (err, data) {
  //   if (err) { 
  //     throw err; 
  //   } else {
  //     var urlList = data.toString().split('\n');
  //     // for (var i = 0; i < urlList.length; i++) {
  //     //   if (urlList[i] === url) {
  //     //     return callback(true);
  //     //   }
  //     // }
  //     // return callback(false);
  //   } 
  // });
  // checks if given url is in the list

  // return false;
  // return boolean
};

exports.addUrlToList = function(url, callback) {
  // if isURLInList is false
  // if (!exports.isUrlInList(url)) {
    // we add URL to list
  fs.appendFile(exports.paths.list, url + '\n', function(error) {
    if (error) {
      throw error;
    } else {
      console.log('Added ' + url + 'successfully');
      callback();
    }
  });
 // }
};

exports.isUrlArchived = function(url, callback) {
  // if isURLInList is true - fs.existsSync
    // check in archives to see if url files exists
      // if true - load the page
      // if false - say we are working on

  fs.readFile(exports.paths.archivedSites + '/' + url, function (err, data) {
    if (err) { 
      return callback(false); 
    } else {
      return callback(true);
    } 
  });

};

exports.downloadUrls = function(urls) {
  //is this the worker functionality
  // worker will download url that is urlList
  // archive that url

  for (var i = 0; i < urls.length; i++) {
    fs.writeFile(exports.paths.archivedSites + '/' + urls[i], urls[i], function(err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log('Downloaded' + urls[i]);
      }
    }); 
  }
};
