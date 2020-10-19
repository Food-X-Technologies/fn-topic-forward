'use strict'

const appInsights = require("applicationinsights");

module.exports = function (context, message) {
    appInsights.setup().start();

    let client = appInsights.defaultClient;
    client.trackMetric({ name: "delivery-count", value: context.bindingData.deliveryCount });

    context.bindings.sendTo = message;
    context.done();
};