const connection = require("./../connection")
const bcrypt = require("bcryptjs");
const crypto = require("crypto");


const postData = (reqBody) => {
console.log("ddddd",reqBody)

const {userNameSignup , email , password} = reqBody;

const randomString = crypto.randomBytes(12).toString('hex');
const hashPassword = crypto.createHash('sha256').update(randomString + password).digest('hex')


 sql = {
     text: 'INSERT INTO users (name  ,email, password) VALUES ($1,$2,$3);',
     values: [userNameSignup, email, hashPassword]
     
 }
     console.log("sqqqll",sql)

 connection.query(sql.text,sql.values,(error,results) => {
     if (error){
         throw error;
         
     }
 } 
 )};
 



module.exports = postData;