console.log('Hello world!');

const testVar = 100;

function test(){
    console.log(testVar);
}

module.exports.testVar = testVar;

module.exports.testFn = test;