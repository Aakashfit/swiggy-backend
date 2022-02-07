const mongoose = require("mongoose")
const paymentSchema = new mongoose.Schema({
    cardno:{
        type:String,
        required:true
    },
    expiry:{
        type:Date,
        required:true
    },
    cvv:{
        type:String,
        required:true
    }
    
})

module.exports = mongoose.model( paymentSchema)

