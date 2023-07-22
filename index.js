const express = require('express')
const body_parser = require("body-parser")



/* -------------------------------------------------------------------------- */
/*                                   ROUTER                                   */
/* -------------------------------------------------------------------------- */
const product = require('./Routers/product')
const cart = require("./Routers/cart")
const user = require('./Routers/user');



const app = express()
/* -------------------------------------------------------------------------- */
/*                                 MiddleWires                                */
/* -------------------------------------------------------------------------- */
app.use(body_parser.urlencoded({ extended: false }))
app.use(express.json())

// --

app.use(product)
app.use(cart)
app.use(user)



app.listen(5000, () => {
    console.log("SERVER IS LISTENING");
})


