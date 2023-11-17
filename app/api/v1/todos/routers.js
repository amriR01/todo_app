const router = require('express').Router()
const { createTodos, getAllTodos, getOneTodo, del, update } = require('./controllers')

router.post('/todo', createTodos)
router.get('/todo', getAllTodos)
router.get('/todo/:id', getOneTodo)
router.delete('/todo/:id', del)
router.put('/todo/:id', update)

module.exports = router