const Product = require("../model/product")
const Cart = require("../model/cart")

exports.addProduct = async (req, res) => {
    try {
        const { name, price } = req.body
        const dbResponse = await Product.create({
            name: name, price: price
        })
        res.send(dbResponse)

    } catch (error) {
        console.log(error);
        res.send(false)
    }
}

exports.getAllProduct = async (req, res) => {
    try {
        const dbResponse = await Product.findAll({
            include: [Cart]
        })
        res.send(dbResponse)
    } catch (error) {
        console.log(error);
        res.send(false)
    }
}