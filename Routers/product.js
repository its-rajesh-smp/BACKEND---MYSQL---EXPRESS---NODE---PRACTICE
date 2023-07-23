const express = require("express")
const ProductController = require("../controller/product")

const router = express.Router()

router.post("/insertProduct", ProductController.addProduct)
router.get("/getAllProduct", ProductController.getAllProduct)


module.exports = router