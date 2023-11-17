const CustomError = require("./customm-error")
const { StatusCodes } = require("http-status-codes")

class NotFound extends CustomError {
    constructor(message){
        super(message)
        this.statuscode = StatusCodes.NOT_FOUND
    }
}

module.exports = NotFound