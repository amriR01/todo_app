const createTokenUser = (user) => {
    return {
        userid: user._id,
        username: user.username,
        email: user.email
    }
}

module.exports = {createTokenUser}
