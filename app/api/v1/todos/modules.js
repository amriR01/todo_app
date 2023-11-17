const mongoose = require('mongoose')
const { model, Schema } = mongoose

const Todos = Schema(
    {
        title: {
            type: String,
            minlength: [3, 'title min 3 character'],
            maxlength: [50, 'title max 50 character'],
            required: true
        },
        desc: {
            type: String,
            minlength: [3, 'title min 3 character'],
            maxlength: [255, 'title max 50 character'],
            default: ""
        },
        is_done: {
            type: Boolean,
            default: false
        }
    },
    { timestamp: true}
)

module.exports = model('todo', Todos)