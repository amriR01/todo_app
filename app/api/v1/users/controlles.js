const { BadRequestError, Unauthenticated } = require('../../../error')
const Users = require('./models')
const { createdJWT, createTokenUser } = require('../../../utils')
const { StatusCodes } = require("http-status-codes")

const register = async(req, res, next) => {
    try {
        const { username, email, password, confirmpassword } = req.body
        if(password !== confirmpassword) throw new BadRequestError('password dan confirm tidak cocok')

        const result = await Users.create({ username, email, password })

        const token = createdJWT({ payload: createTokenUser(result) })
        res.status(StatusCodes.CREATED).json({ status: 'sucses', token })
    } catch(err) {
        next(err)
    }
} 


const login = async(req, res, next) => {
    try {
        const { email, password } = req.body
        if(!email || !password) throw new BadRequestError('please provide email & password')

        const result = await Users.findOne({ email })
        if(!result) throw new UnauthenticatedError('invalid credentials')

        const isPasswordCorrect = await result.comparePassword(password)
        if(!isPasswordCorrect) throw new Unauthenticated('invalid credentials')

        const token = createdJWT({ payload: createTokenUser(result) })
        res.status(StatusCodes.OK).json({ status: 'sucses', token })
    } catch(err) {
        next(err)
    }
} 

module.exports = { register, login }