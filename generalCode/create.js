var fs = require('fs');

fs.writeFileSync('test.txt', 'Hey wtf!');

console.log(fs.readFileSync('test.txt').toString());
