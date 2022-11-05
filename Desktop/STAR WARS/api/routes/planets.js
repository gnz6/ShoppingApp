const express = require("express");
const router = express.Router();
const {getPlanets, getPlanetById} = require("../controllers/planets")

router.get("/", getPlanets)
router.get("/:id",getPlanetById)



module.exports = router;
