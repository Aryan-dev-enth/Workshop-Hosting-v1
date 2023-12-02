import mongoose from "mongoose";

const workshopSceham=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    date:{
        type: Date,
        required: true,
    },
    tags:{
        type: String,
        required: true,
    },
    pricing:{
        type: Number,
        required: true
    },
    image:{
        type:String,
        required:true,
        trim:true,
    }
})

const WorkshopModel = mongoose.model("Workshop",workshopSceham);

export default WorkshopModel;