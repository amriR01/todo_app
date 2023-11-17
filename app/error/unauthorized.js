const { StatusCodes } = require("http-status-codes");
const CustomError = require("./customm-error");

class Unauthorized extends CustomError{
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = Unauthorized