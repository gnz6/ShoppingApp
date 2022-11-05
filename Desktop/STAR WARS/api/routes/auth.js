const express = require("express");
const router = express.Router();
const {signUp, logIn, googleLogin, getUsers} = require("../controllers/auth");
// const {usersModel} = require("../models")

router.get("/users", getUsers)
router.post("/signup", signUp)
router.post("/login", logIn)
router.post("/google", googleLogin)

module.exports = router;
