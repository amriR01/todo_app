const jwt = require("jsonwebtoken")
const { jwtsecret } = require("../config")

const createdJWT = ({payload}) => {
    const token = jwt.sign(payload, jwtsecret, {
        expiresIn: '7d'
    })

    return token

}

const isTokenValid = ({token}) => jwt.verify(token, jwtsecret)


module.exports = { isTokenValid, createdJWT }