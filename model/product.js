const Sequelize = require("sequelize")
const sequelize = require("../util/database")

const Product = sequelize.define("product_table", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})


module.exports = Product