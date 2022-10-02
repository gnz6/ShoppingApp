const express = require("express")
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser, getUser }= require("../controllers/user")
const {verifyToken,  isAdmin, isSuperAdmin, isMember}= require("../middlewares")

// router.get("/", getUsers)
 router.get("/",[verifyToken, isAdmin], getUsers)
router.get("/:id",[verifyToken, isAdmin], getUser)
router.post("/",[verifyToken, isSuperAdmin], createUser)
router.put("/:id",verifyToken, updateUser)
router.delete("/:id",verifyToken, deleteUser)

module.exports = router;