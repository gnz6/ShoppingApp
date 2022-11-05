const mongoose = require("mongoose")

const PlanetSchema = new mongoose.Schema({

    name:{
        type:String,
    },
    diameter:{
        type: String,
    },
    climate:{
        type:String
    },
    terrain:{
        type:String
    },
    surface_water:{
        type:String
    },
    films:[{
        // type:mongoose.Schema.Types.ObjectId, ref:"film"
        type: String
    }],
    residents:[{
        // type:mongoose.Schema.Types.ObjectId, ref:"people"
        type: String,        
    }]
   ,
     url:{
    type:String
}
})


module.exports = mongoose.model("planets", PlanetSchema)