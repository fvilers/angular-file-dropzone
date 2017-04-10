'use strict';

const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

delete packageJson.dependencies;
delete packageJson.devDependencies;
fs.writeFileSync('./dist/package.json', JSON.stringify(packageJson), 'utf-8')

copy('./LICENSE', './dist');
copy('./README.md', './dist');

function copy(source, destination) {
  if (fs.existsSync(destination) && fs.lstatSync(destination).isDirectory()) {
    destination = path.join(destination, path.basename(source))
  }

  fs.createReadStream(source).pipe(fs.createWriteStream(destination));
}
