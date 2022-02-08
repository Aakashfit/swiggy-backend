const mongoose = require("mongoose")
const paymentSchema = new mongoose.Schema({
    cardno:{
        type:String,
        required:true
    },
    cvv:{
        type:String,
        required:true
    },
    expiry:{
        type:Date,
        required:true
    },
    orderid:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:date.now
    },
    source:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model("Payment", paymentSchema)

