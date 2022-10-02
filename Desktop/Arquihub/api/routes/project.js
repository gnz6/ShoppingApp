const express = require("express");
const router = express.Router();
const { getProjects, createProject, updateProject, deleteProject, getProject} = require("../controllers/project")
const {verifyToken,  isAdmin, isSuperAdmin, isMember}= require("../middlewares")

router.get("/", getProjects)
router.get("/:id", getProject)
router.post("/", verifyToken, createProject)
router.put("/:id", verifyToken, updateProject)
router.delete("/:id", verifyToken, deleteProject)

module.exports = router;
