const express=require('express');
let router=express.Router();
router.get("/",(req,res,next)=>{
    res.json({"message":"Main Page"});
});
router.get("/users",(req,res,next)=>{
    res.json({"message":"Users Page"});
});
module.exports=router;