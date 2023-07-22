const User = require("../model/user")

exports.createUser = async (req, res) => {
    try {
        const { userEmail, userName } = req.body
        const newUser = new User(userEmail, userName)
        await newUser.createUser()
        res.send(true)

    } catch (error) {
        console.log(error);
        res.send(false)
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { userEmail } = req.body
        const dbRes = await User.loginUser(userEmail)
        if (dbRes[0].length === 1) {
            res.send(dbRes[0][0])
        }
        else {
            res.send(false)
        }
    } catch (error) {
        console.log(error);
        res.send(false)
    }
}