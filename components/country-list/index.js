var fs = require('fs');
var path = require('path');
var util = require('util');

var combined = {};
var rootPath = './data';
var count = 0;
var max = 0;

// Returns all directories in a path
function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

var fileCallback = function(filename, content, language) {
  var isoLanguageCode = language.replace('_', '-');
  var formatJsContent = JSON.parse(content);
  var formatJs = {};
  formatJs[isoLanguageCode] = formatJsContent;
  fs.writeFileSync(rootPath + '/' + language + '/formatJsCountries.json', JSON.stringify(formatJs), 'utf-8');
  combined[isoLanguageCode] = JSON.parse(content);
  count++;
  if (max === count) {
    fs.writeFileSync(rootPath + '/allCountries.json', JSON.stringify(combined), 'utf-8');
  }
};

var errorHandler = function(error) {
  console.log(error);
}

// Read all files in a folder
function readFiles(dirname, language, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      if (filename !== 'country.json') {
        return;
      }
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content, language);
      });
    });
  });
}

var dirs = getDirectories(rootPath);
max = dirs.length;
var availableLanguages = {};
availableLanguages.languages = [];
for (var i = 0; i < max; i++) {
  var language = dirs[i];
  availableLanguages.languages.push(dirs[i].replace('_', '-'));
  readFiles(rootPath + '/' + language + '/', language, fileCallback, errorHandler);
}
fs.writeFileSync(rootPath + '/availableLanguages.json', JSON.stringify(availableLanguages), 'utf-8');