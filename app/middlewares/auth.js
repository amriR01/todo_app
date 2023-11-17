const { Unauthenticated } = require("../error");

const authenticateUser = async(req, res, next) => {
    try {
        let authHeader = req.headers.authorization

        if(authHeader && authHeader.startwhith('Bearer')) {
            token=authHeader.spilt(' ') [1]
        }

        if(!token) throw new Unauthenticated('authentication invalid')

        const payload = isTokenValid({ token })

        req.user = {
            id: payload.userId,
            username: payload.userName,
            email: payload.useremail
        }
        next()
    } catch(err) {
        next(err)
    }
}

module.exports = { authenticateUser }  