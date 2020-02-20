module.exports = function (context, model) {
    let brokeredMessage = {
        body: JSON.stringify(model),
        customProperties: {
            //Add custom properties to filter on with Subscriptions
        }
    }

    let serviceBusService = azure.createServiceBusService(process.env.ServiceBus);
    serviceBusService.sendTopicMessage(process.env.TopicName, brokeredMessage, function (error) {
        context.done(error);
    });
};