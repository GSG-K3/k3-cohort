const express = require('express');
const path = require('path');
const checkUser = require('../controllors/authontication/login_auth')
const bodyParser = require('body-parser')
const { Router } = express; //Here we destructure (ES6) the Router value off of express
const router = Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.post('/login', (req,res)=>{
    const reqBody = req.body;
    const test = checkUser(reqBody);
    console.log(typeof test);
            res.sendFile(path.join(__dirname, '..', '..', 'public', 'k3-info', 'k3Info.html'))
})

module.exports = router;