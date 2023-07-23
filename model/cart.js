const Sequelize = require("sequelize")
const sequelize = require('../util/database')

const Cart = sequelize.define("cart_table", {
    cartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    userEmail: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})


module.exports = Cart