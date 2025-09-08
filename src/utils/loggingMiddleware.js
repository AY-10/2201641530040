export const loggingMiddleware = (req, res, next) => {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Body: ${JSON.stringify(req.body)}`);

    res.on('finish', () => {
        console.log(`Response Status: ${res.statusCode}`);
        console.log(`Response Body: ${JSON.stringify(res.body)}`);
    });

    next();
};