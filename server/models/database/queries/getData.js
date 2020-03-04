const connection = require('../connection')
const getSql = "select * from student;"

const getData = callback => {
    connection.query(getSql, (err,res) => {
    if (err) throw err; 
    else {callback(err,res.rows)}
})
}


module.exports = getData;