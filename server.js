const express = require('express');
const app = express();
const port=8000;
// app.use(express.static('public'))
// const validateUser=(req,res,next)=>{
    // res.locals.validated=true;
    // console.log("1","validated");
    // next();
// }
// app.use("/",validateUser);
// app.get("/",(req,res,next)=>{
    // res.send("<h1>Main Page</h1>");
    // console.log(2,res.locals.validated);
// 
// });
// app.get("/",(req,res,next)=>{
// res.redirect("/users");
// });
// app.get("/users",(req,res,next)=>{
// res.json({name:"John",age:30});
// });
const router=require("./router");
const productrouter=require("./productrouter");
app.use("/",router);
app.use("/products",productrouter);

app.listen(8000, () => console.log(`Server started on ${port}`));