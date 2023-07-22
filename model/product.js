const db = require("../util/database")

module.exports = class Product {
    static getAllProducts() {
        return db.execute("SELECT * FROM product_table")
    }


    constructor(name, price) {
        this.name = name
        this.price = price
    }


    insertProduct() {
        return db.execute("INSERT INTO product_table (name,price) VALUES (?,?)", [this.name, this.price])
    }


} 