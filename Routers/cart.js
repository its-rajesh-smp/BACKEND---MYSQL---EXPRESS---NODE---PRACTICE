const express = require('express')
const router = express.Router()
const CartController = require('../controller/cart')

router.post('/getAllCart', CartController.getAllCart)
router.post('/addToCart', CartController.addToCart)
router.post('/editCart', CartController.editCart)
router.post('/deleteCart', CartController.deleteCart)
router.post('/deleteAll', CartController.deleteAllCart)

module.exports = router