'use strict'

const fs = require('fs'),
      path = require('path');

function myPath() {
  if (path.sep === '/') {
    console.log('you are on the right path');
  }
  else {
    console.log('you are on the wrong path');
  }}

console.log(path.sep);
myPath();

// fs.readdir('.', (err, entries) => {
//   console.log(entries);
// });

// fs.readFile('package.json', 'utf8', (err, packageJson) => {
//   if (err) {
//     return console.log(err.message);
//   }
//   const configuration = JSON.parse(packageJson);
//   console.log(configuration.version);
// });