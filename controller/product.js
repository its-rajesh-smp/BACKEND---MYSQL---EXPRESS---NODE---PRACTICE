const Product = require("../model/product")


exports.getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.getAllProducts()
        console.log(allProducts[0]);
        res.send(allProducts[0])

    } catch (error) {
        console.log(error);
        res.send(false)
    }
}



exports.insertProduct = async (req, res) => {
    const { name, price } = req.body
    const newProduct = new Product(name, price)
    try {
        await newProduct.insertProduct()
        res.send(true)
    } catch (error) {
        console.log(error);
        res.send(false)
    }
}