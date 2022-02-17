const  app  = require("express");

//const router=require("express").Router();
const stripe=require("stripe")(process.env.STRIPE_KEY)
// const publishable_key="pk_test_51KQtZ1SEQ1Q1nawWLutPTYLP2flhvJbC0TCgYwAXcDJHUZOib5roJZDkZKQDrURbGOA6owe7w6stOeZycx75AX3I00X72eNMu1"
// const secret_key="sk_test_51KQtZ1SEQ1Q1nawWR6ueERYermSxYNfj5BHyGOflugfUOI2YwZl1jjrrpYGCI83DQMqT3a32LHFSzEoheGAZbZnl00FCwjsjYY"
// const path=require("path")

// app.get("/payment",(req,res)=>{
//     res.render(`home`,{
//         key:publishable_key
//     })
// })








// router.post("/payment",(req,res)=>{
//     stripe.charge.create({
//         source:req.body.tokenid,
//         amount:req.body.amount,
//         currency:"inr",
//     },(stripeError,stripeRes)=>{
//         if(stripeError){
//             res.json(stripeError)
//         }else{
//             res.json(stripeRes);
//         }
//     })
// })
module.exports=router;