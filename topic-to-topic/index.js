'use strict'

const appInsights = require("applicationinsights");

module.exports = function (context, message) {
    appInsights.setup().start();
    
    context.bindings.outputSbQueue = message;
    context.done();
};