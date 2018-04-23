module.exports.test = 'b';

const modA = require('./modA');
console.log('modB', modA.test);

module.exports.test = 'bb';

