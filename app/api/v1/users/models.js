const mongoose = require('mongoose')
const { model, Schema } = mongoose
const bcrypt = require('bcryptjs')

const User = Schema(
    {
        username: {
            type: String,
            unique: true
        },
        email: {
            type: String,
            unique: true
            
        },
        password: {
            type: String,
            minlength: [8, 'password min 8 char']
        },
        avatar: {
            type: mongoose.Types.ObjectId,
            ref: 'Image'
        }
    },
    {timestamps: true}
)

User.pre('save', async function(next) {
    const User = this
    if(User.isModified('password')) {
        User.password = await bcrypt.hash(User.password, 12)
    }
    next()
})

User.methods.comparePassword = async function(canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password)
    return isMatch;
}



module.exports = model('user', User)