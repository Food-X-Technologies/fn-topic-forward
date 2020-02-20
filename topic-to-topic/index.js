module.exports = function (context, model) {
    context.bindings.out = model;
    context.done();
};