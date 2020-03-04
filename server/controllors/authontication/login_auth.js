const bcrypt = require("bcrypt");
const checkEmail = require("../../models/database/queries/getData");
const postData = require("../../models/database/queries/postData");
const jwt = require('jsonwebtoken');
const alert = require('alert-node')

const checkUser = (req, res)=>{
    const {email, pass} = req;
    checkEmail(email)
    .then(data => {
        if (data != undefined)
        {
            bcrypt.compare(pass, data.pass, (err, result) => {
                if(err) console.log(err)
                if(result){
                    const token = jwt.sign({email: email}, process.env.SECRET);
                    console.log(token)
                    res.cookie('token', token, { maxAge: 9999999})
                    return jwt.verify(token, SECRET); 
                } 
                else {
                    alert("Incorrect Password") 
                    return false;
                }      
            })
            }
            else
            {
            alert("email not found");
            return false
        }

        })
        .catch(console.log)

}




module.exports = checkUser;

