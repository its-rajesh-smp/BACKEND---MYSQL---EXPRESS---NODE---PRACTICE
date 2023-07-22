const db = require('../util/database')

module.exports = Cart = class {
    static getAllCart(userEmail) {
        return db.execute("SELECT * FROM cart_table WHERE userEmail = ?", [userEmail])
    }

    static editCart(cartId, quantity) {
        return db.execute('UPDATE cart_table SET quantity = ? WHERE cartId = ?', [quantity, cartId])
    }

    static deleteCart(cartId) {
        return db.execute('DELETE FROM cart_table WHERE cartId = ?', [cartId])
    }

    static deleteAllCart(userEmail) {
        return db.execute('DELETE FROM cart_table WHERE userEmail = ?', [userEmail])
    }

    constructor(productId, userEmail, quantity) {
        this.productId = productId;
        this.userEmail = userEmail;
        this.quantity = quantity;
    }

    addToCart() {
        return db.execute("INSERT INTO cart_table (productId,userEmail,quantity) VALUES (?,?,?)", [this.productId, this.userEmail, this.quantity])
    }
}