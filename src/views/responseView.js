module.exports = {
    sendSuccess(res, data, message = 'Success') {
        res.status(200).json({message, status: 'Success', data});
    },
    sendError(res, message, error = null, statusCode = 500) {
        res.status(statusCode).json({message, status: 'Error', error });
    }
}