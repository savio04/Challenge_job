import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/challenge',{useNewUrlParser: true, useUnifiedTopology: true})

const acitivitySchema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    status:{
        type:String,
        enum: ["CONCLUIDA", "PENDENTE", "CANCELADA"],
        require: true,
        default: "PENDENTE"
    },
    created_at:{
        type: Date,
        default: Date.now,
        require: true
    }
}, {collection: 'activity'})

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{collection: 'users'})

export {mongoose,acitivitySchema,userSchema}