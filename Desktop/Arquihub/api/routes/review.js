const express = require("express")
const router = express.Router();
const { getReviews, createReview, updateReview, deleteReview, getReview} = require("../controllers/review")
const {verifyToken,  isAdmin, isSuperAdmin, isMember}= require("../middlewares")


router.get("/", getReviews)
router.get("/:id", getReview)
router.post("/", verifyToken, createReview)
router.put("/:id", verifyToken, updateReview)
router.delete("/:id", verifyToken, deleteReview)

module.exports = router;
