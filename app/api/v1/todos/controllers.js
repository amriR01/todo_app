const { StatusCodes } = require('http-status-codes')
const Todos = require('./modules')
const {NotFoundError} = require('../../../error')


const createTodos = async(req, res, next) => {
    try {
    const { title, desc } = req.body

    const result = await Todos.create({ title: title, desc:desc })
res.status(StatusCodes.CREATED).json({ status: 'sucses', todos:result})
    } catch (error) {
        next(error)
    }
}

const getAllTodos =  async(req, res, next) => {
    try{
        const result = await Todos.find()
        res.status(StatusCodes.OK).json({status: "succes", data: result})
    }catch(err) {
        next(err)
    }
}


const getOneTodo = async(req, res, next) => {
    try {
        const { id } = req.params
        const result = await Todos.findOne({ _id: id })
        if(!result) throw new NotFoundError(`todo not Found :${id}`)

        res.status(StatusCodes.OK).json({ status: 'sucses', todo: result })
    } catch (error) {
        next(error)
    }
}

const del = async(req, res, next) => {
    const { id } = req.params
    const result = await Todos.findOneAndDelete({ _id: id })
    if (!result) throw new NotFoundError(` Todo not Found :${id} `)

    res.status(StatusCodes.OK).json({ status: 'sucses', msg: 'deleted' })
}


const update = async(req, res, next) => {
    try {
    const { id } = req.params
    const  { title, desc }  = req.body 
    const  result = await Todos.findOneAndUpdate({ _id: id }, { title: title, desc: desc }, { new: true, runValidators: true })
    if (!result) throw new NotFoundError(` Todo not Found :${id} `)

    res.status(StatusCodes.OK).json({ status: 'Berhasil', msg: 'Hallo' })
}catch (err) {
    next(err)
}
}




module.exports = {createTodos, getAllTodos, getOneTodo, del, update}