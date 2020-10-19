const builder = require('jest-trx-results-processor');     

let processor = builder({
    outputFile: './results.trx' 
});

module.exports = processor;