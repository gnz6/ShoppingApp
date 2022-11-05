const mongoose = require("mongoose")

const FilmSchema = new mongoose.Schema({

   
    director:{
        type: String,
    },
    release_date:{
        type:String
    },
    episode_id:{
        type:Number,
        required: true
    },
    title:{
        type:String,
        required:true
    },
    url:{
        type:String
    },
    characters:[{
        type:String
   }]
})


module.exports = mongoose.model("film", FilmSchema)