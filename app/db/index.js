const mongoose = require('mongoose')
const {urlDb} = require('../config')

mongoose.connect(urlDb)
.then(() => console.log('mongodb conected'))
.catch((err) => console.log('connection error: tidak dapat connect ke mongodb'))

const db = mongoose.connection

module.exports = db