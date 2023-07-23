const express = require("express")
const body_parser = require('body-parser')
const sequelize = require("./util/database")

const app = express()


// ROUTER
const product = require('./Routers/product')
const user = require('./Routers/user')
const cart = require('./Routers/cart')


// Middlewires
app.use(body_parser.urlencoded({ extended: false }))
app.use(express.json())

// ---

app.use(product)
app.use(user)
app.use(cart)





sequelize.sync().then(() => {
    console.log("DATABASE STARTED");
    app.listen(5000, () => {
        console.log("SERVER LISTENING");
    })
}).catch((err) => {
    console.log(err);
})





