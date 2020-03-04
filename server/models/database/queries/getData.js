const connection = require('../connection')
const getSql = "select * from student;"

const getData = callback => {
    connection.query(getSql, (err,res) => {
    if (err) throw err; 
    else {callback(err,res.rows)}
})
}

const checkEmail = email => {
    const getSql = {
        text: `select * from user1 where email = ($1)`,
        value: [email]
    }
    
    return connection
    .query(getSql,[email])
    .then(res => res.rows[0])
    .catch(err => console.log(err))
}

module.exports = {getData, checkEmail};