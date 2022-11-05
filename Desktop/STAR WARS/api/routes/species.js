const express = require("express");
const router = express.Router();
const {getSpecies, getSpecieById} = require("../controllers/species")
router.get("/", getSpecies)
router.get("/:id", getSpecieById)


module.exports = router;
