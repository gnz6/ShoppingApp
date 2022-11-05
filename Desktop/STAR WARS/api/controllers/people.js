const axios = require("axios")
const { peopleModel, usersModel, filmModel, planetModel, specieModel } = require("../models")

const getCharacters = async (req, res) => {
    const api = await peopleModel.find()

    if (!api.length) {

        const links = [
            ("https://swapi.dev/api/people/?page=9&format=json"),
            ("https://swapi.dev/api/people/?page=8&format=json"),
            ("https://swapi.dev/api/people/?page=7&format=json"),
            ("https://swapi.dev/api/people/?page=6&format=json"),
            ("https://swapi.dev/api/people/?page=5&format=json"),
            ("https://swapi.dev/api/people/?page=4&format=json"),
            ("https://swapi.dev/api/people/?page=3&format=json"),
            ("https://swapi.dev/api/people/?page=2&format=json"),
            ("https://swapi.dev/api/people/?format=json")
        ];
        const promises = links.map(url => axios.get(url).then(resp => resp.data.results))

        let apiChars = Promise.all(promises)
            .then(resp => resp.map(c => c))
            .then(resp => resp.flat())
            .then(resp => resp.map(character => {
                return {
                    name: character.name,
                    birth_year: character.birth_year ? character.birth_year : "Unknown",
                    homeworld: character.homeworld ? character.homeworld : "Unknown",
                    films: character.films[0] ? character.films.map(f => f) : "This character has not appeared in any movie",
                    specie: character.species[0] ? character.species[0] : "Human",
                    url: character.url? character.url : "No Url"
                }
            }))
            .then(resp => peopleModel.insertMany(resp))
            .then(resp => res.status(200).send(resp))
            .catch(error => console.log(error))

        return apiChars
    } else {
        return res.status(200).send(api)
    }
}


const getCharacterById = async (req, res) => {
    const{id}= req.params
    const db = await peopleModel.find()

    if (db.length && id) {
            try {
                let findCharacter = await peopleModel.findById(id)
                let modifiedCharacter = findCharacter

                let characterFilm = modifiedCharacter.films
                let films = await filmModel.find({url :{ $in : characterFilm }})
                let formatFilms = films.map(f=> `Episode ${f.episode_id} : ${f.title}`)
                let set = new Set(formatFilms)
                let charFilms = Array.from(set)

                // console.log(films);
                let characterSpecie = modifiedCharacter.specie
                let specie = await specieModel.find({url :{ $in : characterSpecie }})
                let formatSpecie = specie[0]? specie[0].name : "Human"

                let characterPlanet = modifiedCharacter.homeworld
                let homeworld = await planetModel.find({url :{ $in : characterPlanet }})
                let formatHome = homeworld[0]? homeworld[0].name : ""

                let formattedCharacter ={
                    _id: findCharacter._id,
                    name:  findCharacter.name,
                    birth_year:  findCharacter.birth_year,
                    homeworld: formatHome,
                    films: charFilms,
                    specie: formatSpecie,
                    url:  findCharacter.url,
                }

                findCharacter ? res.status(200).send(formattedCharacter) :
                    res.status(400).send("cant find character")
            } catch (error) {
                console.log(error);
                res.status(400).send("cant find character")
            }
    }
}





module.exports = { getCharacters, getCharacterById }

