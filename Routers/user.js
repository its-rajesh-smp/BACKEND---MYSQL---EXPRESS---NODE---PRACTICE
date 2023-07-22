const express = require('express')
const UserController = require("../controller/user")

const router = express.Router()

router.post("/createUser", UserController.createUser)
router.post("/loginUser", UserController.loginUser)


module.exports = router
