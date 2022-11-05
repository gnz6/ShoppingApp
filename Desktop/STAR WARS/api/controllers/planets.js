const axios = require("axios");
const { planetModel, peopleModel, filmModel } = require("../models");


const getPlanets = async (req, res) => {

    const api = await planetModel.find()

    if (!api.length) {
        const links = [
            ("https://swapi.dev/api/planets/?page=6&format=json"),
            ("https://swapi.dev/api/planets/?page=5&format=json"),
            ("https://swapi.dev/api/planets/?page=4&format=json"),
            ("https://swapi.dev/api/planets/?page=3&format=json"),
            ("https://swapi.dev/api/planets/?page=2&format=json"),
            ("https://swapi.dev/api/planets/?format=json")
        ];
        const promises = links.map(url => axios.get(url).then(resp => resp.data.results))

        let apiPlanets = Promise.all(promises)
            .then(resp => resp.map(c => c))
            .then(resp => resp.flat())
            .then(resp => resp.map(planet => {
                return {
                    name: planet.name,
                    diameter: planet.diameter,
                    climate: planet.climate,
                    terrain: planet.terrain,
                    surface_water: planet.surface_water,
                    films: planet.films[0] ? planet.films.map(planet => planet) : "",
                    residents: planet.residents[0] ? planet.residents.map(planet => planet) : "",
                    url: planet.url ? planet.url : ""
                }
            }))
            .then(resp => planetModel.insertMany(resp))
            .then(resp => res.status(200).send(resp))
            .catch(error => console.log(error))

        return apiPlanets
    } else {
        return res.status(200).send(api)
    }
}


const getPlanetById = async (req, res) => {
    const { id } = req.params
    const db = await planetModel.find()
    if (db.length && id) {
        try {

            const findPlanet = await planetModel.findById(id)
            let modifiedPlanet = findPlanet

            let planetFilms = modifiedPlanet.films
            let films = await filmModel.find({ url: { $in: planetFilms } })
            let formatFilms = films[0]?films.map(f => `Episode ${f.episode_id} : ${f.title}`):"This planet does not appeat in any film"

            let planetResidents = modifiedPlanet.residents
            let residents = await peopleModel.find({ url: { $in: planetResidents } })
            let formatResidents = residents[0] ? residents.map(r => r.name) : "Non registered residents"

            let formattedPlanet = {
                _id: findPlanet._id,
                name: findPlanet.name,
                diameter:"4200",
                climate: findPlanet.climate,
                terrain: findPlanet.terrain,
                surface_water: findPlanet.surface,
                films : formatFilms,
                residents: formatResidents
            }
 

            findPlanet ? res.status(200).send(formattedPlanet) :
                res.status(400).send("cant find Planet")
        } catch (error) {
            console.log(error);
            res.status(400).send("cant find planet")
        }
    }
}


module.exports = { getPlanets, getPlanetById }