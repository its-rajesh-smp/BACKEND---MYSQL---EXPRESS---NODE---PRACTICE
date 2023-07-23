const Cart = require('../model/cart')

exports.getAllCart = async (req, res) => {
    try {
        const { userEmail } = req.body
        const dbResponse = await Cart.findAll({
            where: {
                userEmail: userEmail
            }
        })
        res.send(dbResponse)


    } catch (error) {
        console.log(error);
        res.send(false)
    }
}




exports.addToCart = async (req, res) => {
    try {
        const { cartId, productId, userEmail, quantity } = req.body
        const dbResponse = await Cart.create({
            cartId, productId, userEmail, quantity
        })
        res.send(dbResponse)

    } catch (error) {
        console.log(error);
        res.send(false)
    }

}




exports.editCart = async (req, res) => {
    try {
        const { cartId, quantity } = req.body
        const dbResponse = await Cart.update({ quantity }, {
            where: {
                cartId: cartId
            }
        })
        res.send(dbResponse)

    } catch (error) {
        console.log(error);
        res.send(false)
    }
}







exports.deleteCart = async (req, res) => {
    try {
        const { cartId } = req.body
        await Cart.destroy({
            where: {
                cartId: cartId
            }
        })
        res.send(true)

    } catch (error) {
        console.log(error);
        res.send(false)
    }
}







exports.deleteAllCart = async (req, res) => {
    try {
        const { userEmail } = req.body
        const dbResponse = Cart.destroy({
            where: {
                userEmail: userEmail
            }
        })
        res.send(true)

    } catch (error) {
        console.log(error);
        res.send(false)
    }
}






