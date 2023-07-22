const Cart = require("../model/cart")

exports.addToCart = async (req, res) => {
    try {
        const { productId, userEmail, quantity } = req.body
        const newCartProduct = new Cart(productId, userEmail, quantity)
        await newCartProduct.addToCart()

        res.send(true)
    } catch (error) {
        console.log(error);
        res.send(false)
    }
}

exports.editCart = async (req, res) => {
    try {
        const { cartId, quantity } = req.body
        await Cart.editCart(cartId, quantity)
        res.send(true)
    } catch (error) {
        console.log(error);
        res.send(false)
    }
}

exports.deleteCart = async (req, res) => {
    try {
        const { cartId } = req.body
        await Cart.deleteCart(cartId)
        res.send(true)
    } catch (error) {
        console.log(error);
        res.send(false)
    }
}

exports.deleteAllCart = async (req, res) => {
    try {
        const { userEmail } = req.body
        await Cart.deleteAllCart(userEmail)
        res.send(true)
    } catch (error) {
        console.log(error);
        res.send(false)
    }
}

exports.getAllCart = async (req, res) => {
    try {
        const { userEmail } = req.body
        const dbRes = await Cart.getAllCart(userEmail)
        console.log(dbRes);
        res.send(dbRes[0])
    } catch (error) {
        console.log(error);
        res.send(false)
    }
}
