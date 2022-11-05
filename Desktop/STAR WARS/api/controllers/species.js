const axios = require("axios");
const { specieModel, peopleModel, planetModel } = require("../models");


 const getSpecies =async(req,res)=>{

    const api = await specieModel.find()

    if(!api.length){
    const links = [ 

        ( "https://swapi.dev/api/species/?page=4&format=json"),
        ( "https://swapi.dev/api/species/?page=3&format=json"),
        ( "https://swapi.dev/api/species/?page=2&format=json"),
        ( "https://swapi.dev/api/species/?format=json")
    ];
        const promises = links.map(url => axios.get(url).then(resp=> resp.data.results))
    
        let apiSpecies = Promise.all(promises)
        .then(resp=> resp.map(c=>c))
        .then(resp=> resp.flat())
        .then(resp=> resp.map(specie =>{
        return{
            name: specie.name,
            language: specie.language,
            homeworld: specie.homeworld?specie.homeworld: "",
            people: specie.people[0]? specie.people.map(p=>p):"",
            url: specie.url
        }
    }))
    .then(resp=> specieModel.insertMany(resp))
    .then(resp=> res.status(200).send(resp))
    .catch(error=>console.log(error))

    return apiSpecies
    } 
    return res.status(200).send(api)
}


const getSpecieById = async(req,res)=>{
    const {id}= req.params
    if(!id) throw new Error("Cant find Specie")

    const db = await specieModel.find()
    if (db.length && id) {
        try {
            const findSpecie = await specieModel.findById(id)

            let specieCharacters = findSpecie.people
            let chars = await peopleModel.find({ url :{ $in : specieCharacters }})
            let formatCharacters = chars[0]? chars.map(c=> c.name) : "No characters"

            let speciePlanet = findSpecie.homeworld
            let homeworld = await planetModel.find({url :{ $in : speciePlanet }})
            let formatHome = homeworld[0]? homeworld[0].name : ""
            

            let formattedSpecie ={
                name: findSpecie.name,
                language: findSpecie.language,
                people: formatCharacters,
                url: findSpecie.url,
                _id: findSpecie._id,
                homeworld: formatHome
            }

            findSpecie ? res.status(200).send(formattedSpecie) :
                res.status(400).send("cant find specie")
        } catch (error) {
            console.log(error);
            res.status(400).send("cant find specie")
        }
     }
    }


module.exports ={getSpecies, getSpecieById}