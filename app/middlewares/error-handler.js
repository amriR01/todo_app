const { StatusCodes} = require('http-status-codes')

const errorHendlerMiddleware = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong try again later'
    }

    if (err.name === 'ValidationError') {
        customError.msg = Object.values(err.errors)
        .map((item) => item.message)
        .join(', ')
        customError.statusCode = StatusCodes.BAD_REQUEST
    }

    if (err.code && err.code === 11000) {
        customError.msg = `Duplicate velue entered for ${Object.keys(
            err.keyValue
        )} field, please choose another velue`
        customError.statusCode = StatusCodes.BAD_REQUEST
    }

    if (err.name === 'CastError') {
        customError.msg = `No item found with id : ${err.velue}`
        customError.statusCode = StatusCodes.NOT_FOUND
    }

    return res.status(customError.statusCode).json({ status: 'error', message: customError.msg})
}

module.exports = errorHendlerMiddleware