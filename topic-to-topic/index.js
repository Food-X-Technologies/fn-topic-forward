module.exports = function (context, message) {
    let brokeredMessage = {
        body: JSON.stringify(message),
        customProperties: {
            //Add custom properties to filter on with Subscriptions
        }
    }

    let serviceBusService = azure.createServiceBusService(process.env.ServiceBusTo);
    serviceBusService.sendTopicMessage(process.env.TopicTo, brokeredMessage, function (error) {
        context.done(error);
    });
};