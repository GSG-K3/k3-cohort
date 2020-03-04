const express = require('express');
const postData = require('../models/database/queries/postData')
const bodyparser =require("body-parser")
const { Router } = express; //Here we destructure (ES6) the Router value off of express

const router = Router();
router.use(bodyparser.json())
router.use(bodyparser.urlencoded({extended:false}))
router.post('/signup' , (req,res)=>{

    const reqBody = req.body
    
// if(reqBody.password !== reqBody.repeatPassword){

    // alert("Passwords do not match.");
                // return false;
// } else 
    console.log(reqBody);
    postData(reqBody)

    
    })
    
// router.get('/', (req,res)=>{
//     res.send(",jsbdksaj")
// })

module.exports = router;