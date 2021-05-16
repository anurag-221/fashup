const dotenv = require('dotenv');
const mongoose = require('mongoose'); 
const express = require('express');
const app = express();


//Database
dotenv.config({path:'./config.env'});
require('./db/conn');
app.use(express.json()); 
//const User = require('./model/userSchema');
// link auth file with app
app.use(require('./route/auth'));

const PORT = process.env.PORT;

//Middleware 

const middleware =(req,res, next) =>{
       console.log("my middleware");
        next();
}

app.get('/', (req , res)=> {
       res.send(`Hello world`);
});

app.get('/admin',middleware ,(req , res)=> {
    res.send(`Welcome  to admin Panel`);
});

app.listen(PORT, ()=>{
     console.log(`server connected and running at  ${PORT}`);
})