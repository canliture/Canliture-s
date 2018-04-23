module.exports.test = 'a';

const modB = require('./modB');

console.log('modA: ', modB.test);

module.exports.test = 'aa';