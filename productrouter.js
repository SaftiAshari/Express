const express = require('express');
const router=express.Router();
router.get("/",(req,res,next)=>{
    res.json({"message":"Products Page"});
});
router.get("/users",(req,res,next)=>{
    res.json({"message":"Products user Page"});
});
module.exports=router;