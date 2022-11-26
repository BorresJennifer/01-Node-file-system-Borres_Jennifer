const fs = require('fs');

const read = function() {
    return fs.readFileSync('./task.txt',{
        encoding: 'utf8', flags: 'r'
    } )

}

module.exports = read;