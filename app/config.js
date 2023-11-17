const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    urlDb: process.env.URL_MONGODB,
    jwtsecret: process.env.JWT_SECRET
}