const fs = require('fs');

const write = function(data="Love yourself") {
    fs.writeFileSync('task.txt', data);

}

module.exports = write;
