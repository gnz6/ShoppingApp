const express = require("express")
const router = express.Router();
const { getUpdates, createUpdate, putUpdate} = require("../controllers/update")
const {verifyToken,  isAdmin, isSuperAdmin, isMember}= require("../middlewares")

router.get("/",verifyToken, getUpdates)
router.post("/",verifyToken, createUpdate)
router.put("/:id",verifyToken, putUpdate)


module.exports = router;