const { StatusCodes } = require("http-status-codes")
const CustomError = require("./customm-error");

class Unauthenticated extends CustomError {
    constructor(message){
    super(message)
    this.statusCode = StatusCodes.FORBIDDEN
    }
}

module.exports = Unauthenticated