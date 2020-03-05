const express = require('express');
const path = require('path')
const fs = require('fs')

const postData = require('../models/database/queries/postData')
const getData = require('../models/database/queries/getData')
const bodyparser =require("body-parser")
const { Router } = express; //Here we destructure (ES6) the Router value off of express
const checkUser = require('../controllors/authontication/login_auth')

const router = Router();
router.use(bodyparser.json())
router.use(bodyparser.urlencoded({extended:false}))
router.post('/signup' , (req,res)=>{
    const reqBody = req.body
    console.log(reqBody);
    postData(reqBody)
    })


router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '..','..', 'public','accounts', 'index.html'))
})

router.get('/getk3info',(req,response)=> {
    getData((err,res) => {
    if(err) {console.log(err,'unsuccessful connection')}
    else {response.send(res)}

    })
})

router.post('/login', checkUser, (req,res)=>{
    // const reqBody = req.body;
    // checkUser(reqBody, res);
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'k3-info', 'k3Info.html'))
})

router.get('/k3info',(req,res)=>{
    res.sendFile(path.join(__dirname, '..','..', 'public','k3-info', 'k3Info.html'))
})

module.exports = router;