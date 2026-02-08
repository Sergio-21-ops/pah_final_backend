import mongoose from "mongoose";



const discoSchema = new mongoose.Schema({

    nombre:{
        type:String,
        required:true
    },
    ano:{
        type:Number,
        required:true
    },
    genero:{
        type:String,
        required:true
    },
    banda:{
        type:mongoose.SchemaTypes.ObjectId,ref:'Banda',required:true
    },
    imagenUrl:{
        type:String
    }
})

export default mongoose.model('Disco',discoSchema)