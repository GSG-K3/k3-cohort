const bcrypt = require("bcrypt");
const emailAuthentication = require("../../models/database/queries/emailAuthentication");
const jwt = require('jsonwebtoken');
const alert = require('alert-node')

const checkUser = (req, res, next)=>{
    const {email, pass}=req.body;
    emailAuthentication(email)
    .then(data => {
        if (data)
        {
            let hashPassword = data.password;
            bcrypt.compare(pass, hashPassword, (err, result) => {
                if(err) console.log(err)
                if(result){
                    let token = jwt.sign({email: email}, process.env.SECRET);
                    res.cookie('token', token);
                    next()
                } 
                else {
                    alert("Incorrect Password") 
                    return;
                }      
            })
        }

        else
        {
            alert("email not found");
            return;
        }
    })
    .catch(console.log)
}

module.exports = checkUser;

