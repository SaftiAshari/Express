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



app.listen(8000, () => console.log(`Server started on ${port}`));