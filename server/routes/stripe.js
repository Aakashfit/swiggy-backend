const router=require("express").Router();
const stripe=require("stripe")(process.env.STRIPE_KEY)
router.post("/payment",(req,res)=>{
    stripe.charge.create({
        source:req.body.tokenid,
        amount:req.body.amount,
        currency:"inr",
    },(stripeError,stripeRes)=>{
        if(stripeError){
            res.json(stripeError)
        }else{
            res.json(stripeRes);
        }
    })
})
module.exports=router;