const connection = require("../connection")
const bcrypt = require("bcryptjs");

const hashPassword = (plainPassword, cb) => {
    bcrypt.hash(plainPassword, 10, (err, hash) => {
        cb(err, hash)
    })
}

const postData = (reqBody) => {

const {userNameSignup , email , password} = reqBody;

hashPassword(password, (err, hash) => {
    sql = {
        text: 'INSERT INTO users (name  ,email, password) VALUES ($1,$2,$3);',
        values: [userNameSignup, email, hash]
        
    };
   
    connection.query(sql.text,sql.values,(error,results) => {
        if (error){
            throw error;    
        }
    });
})
 
};
 
module.exports = postData;