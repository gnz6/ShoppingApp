const mongoose = require("mongoose")

const SpecieSchema = new mongoose.Schema({

    name:{
        type:String,
    },
    language:{
        type: String,
    },
    homeworld:{
        // type: mongoose.Schema.Types.ObjectId, ref:"planet"
        type:String
    },
    people:[{
        // type: mongoose.Schema.Types.ObjectId, ref:"people"
        type:String
    }],
    url:{
        type:String
    }

})


module.exports = mongoose.model("species", SpecieSchema)