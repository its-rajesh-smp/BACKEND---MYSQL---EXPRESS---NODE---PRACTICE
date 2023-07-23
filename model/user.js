const Sequelize = require("sequelize")
const sequelize = require("../util/database")

const User = sequelize.define("user_table", {
    userEmail: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


module.exports = User