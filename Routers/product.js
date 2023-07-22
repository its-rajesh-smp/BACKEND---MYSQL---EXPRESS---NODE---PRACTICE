const express = require('express')
const router = express.Router()

/* -------------------------------------------------------------------------- */
/*                                 CONTROLLERS                                */
/* -------------------------------------------------------------------------- */

const ProductController = require('../controller/product')


router.get("/getAllProducts", ProductController.getAllProducts)
router.post("/insertProduct", ProductController.insertProduct)





module.exports = router