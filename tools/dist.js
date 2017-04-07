'use strict';

const fs = require('fs');
const path = require('path');

copy('LICENSE', './dist');
copy('package.json', './dist');
copy('README.md', './dist');

function copy(source, destination) {
  if (fs.existsSync(destination) && fs.lstatSync(destination).isDirectory()) {
    destination = path.join(destination, path.basename(source))
  }

  fs.createReadStream(source).pipe(fs.createWriteStream(destination));
}
