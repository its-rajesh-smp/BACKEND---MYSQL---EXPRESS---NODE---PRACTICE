const express = require('express')
const CartController = require("../controller/cart")

const router = express.Router()


router.post("/getAllCart", CartController.getAllCart)
router.post("/addToCart", CartController.addToCart)
router.post("/editCart", CartController.editCart)
router.post("/deleteCart", CartController.deleteCart)
router.post("/deleteAllCart", CartController.deleteAllCart)



module.exports = router