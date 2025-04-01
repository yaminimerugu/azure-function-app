module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // Return the "Hello, world!" message
    context.res = {
        status: 200, // HTTP status code
        body: "Hello, world!" // Message to be returned
    };
};
