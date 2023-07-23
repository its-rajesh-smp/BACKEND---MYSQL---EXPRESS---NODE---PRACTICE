const Sequelize = require("sequelize").Sequelize

const sequelize = new Sequelize("practice_database", "root", "Rajesh500@#", { dialect: "mysql", host: "localhost", logging: false })


module.exports = sequelize