const User = require("../model/user")
const Cart = require("../model/cart")


exports.createUser = async (req, res) => {
    try {
        const { userEmail, userName } = req.body
        const dbResponse = await User.create({
            userName: userName, userEmail: userEmail
        })
        res.send(dbResponse)

    } catch (error) {
        console.log(error);
        res.send(false)
    }
}


exports.loginUser = async (req, res) => {
    try {
        const { userEmail } = req.body
        const dbResponse = await User.findByPk(userEmail, {
            include: [Cart]
        })
        if (!dbResponse) {
            res.send(false)
        }
        else {
            res.send(dbResponse)
        }

    } catch (error) {
        console.log(error);
        res.send(false)
    }

}