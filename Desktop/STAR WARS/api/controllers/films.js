const axios = require("axios")
const { filmModel, peopleModel } = require("../models")

const getMovies = async (req, res) => {

    const api = await filmModel.find()

    if (!filmModel[0]) {

        const link = "https://swapi.dev/api/films/?format=json"
        const movies = axios.get(link).then(resp => resp.data.results)
            .then(resp => resp.map(c => c))
            .then(resp => resp.flat())
            // .then(resp => console.log(resp))
            .then(resp => resp.map(film => {
                return {
                    title: film.title,
                    director: film.director,
                    episode_id: film.episode_id,
                    release_date: film.release_date,
                    characters: film.characters? film.characters.map(f => f): "",
                    planets: film.planets[0] ? film.planets.map(f =>f): "",
                    url: film.url
                }
            }))         
            .then(resp => filmModel.insertMany(resp))
            .then(resp => res.status(200).send(resp))
            .catch(error => console.log(error))

        return movies
    } else {
        return res.status(200).send(api)
    }
}


const getMovieById = async (req, res) => {
    const { id } = req.params

    const db = await filmModel.find()
    if (db.length && id) {
        try {
            const findMovie = await filmModel.findById(id)

            let filmCharacters = findMovie.characters
            let chars = await peopleModel.find({ url :{ $in : filmCharacters }})
            let formatCharacters = chars[0]? chars.map(c=> c.name) : "No characters"

            // console.log(formatCharacters);

            let formatMovie = {
                characters: formatCharacters,
                _id: findMovie._id,
                episode_id: findMovie.episode_id,
                url: findMovie.url,
                title: findMovie.title,
                release_date: findMovie.release_date,
                director: findMovie.director

            }

            findMovie ? res.status(200).send(formatMovie) :
                res.status(400).send("cant find Movie")
        } catch (error) {
            console.log(error);
            res.status(400).send("cant find Movie")
        }
    } 
}


module.exports = { getMovies, getMovieById }