const express = require('express');
const router = express.Router();

require('../db/conn');
const User= require('../model/userSchema');
 
router.get('/', (req , res)=> {
    res.send(`Hello world`);
});

router.post('/register',(req,res)=>{

    const { name ,email , password}=req.body;

    if(!name || !email || !password)
    {
        return res.status(422).json({error:'Poora bhar lo chacha'});
    }
       User.findOne({email:email})
       .then((userExist)=>{
           if(userExist){
            return res.status(422).json({error:'Phli fursat mey nikal'});  
           }
           const admin = new User({name ,email ,password});
           admin.save().then(()=>{
               res.status(201).json({message:"badhai ho"});
           }).catch((err)=>res.status(500).json({error:"failed to register"}));
       }).catch(err =>{console.log(err);});
});

module.exports = router;