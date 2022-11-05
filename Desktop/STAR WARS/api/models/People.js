const mongoose = require("mongoose")

const PeopleSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    birth_year:{
        type:String
    },
    homeworld:{
        // type:mongoose.Schema.Types.ObjectId,
        // ref:"planet"
        type:String
    },
    films:[{
        // type: mongoose.Schema.Types.ObjectId,
        // ref:"film"
        type: String
    }],
    specie:{
        type:String
    },
    url: {
        type:String
    }
})


module.exports = mongoose.model("people", PeopleSchema)