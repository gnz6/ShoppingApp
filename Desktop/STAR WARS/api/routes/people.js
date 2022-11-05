const express = require("express");
const router = express.Router();
// const { getCharacters, getCharacter} = require("../controllers/people")
const {getCharacters, getCharacterById, getCharacterFilms} = require("../controllers/people")

router.get("/", getCharacters)
router.get("/:id", getCharacterById)


module.exports = router;
