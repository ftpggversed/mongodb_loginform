const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/loginform")
.then(() => {
    console.log("Mongo Connected On Port 27017")
})
.catch(() => {
    console.log("Failed To Connect Mongo On Port 27017")
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection = new mongoose.model("Collection1", LogInSchema)

module.exports = collection