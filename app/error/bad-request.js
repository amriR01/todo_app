const CustomError = require("./customm-error")
const { StatusCodes } = require("http-status-codes")

class BadRequestError extends CustomError {
    constructor(message){
        super(message)
        this.statuscode = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequestError