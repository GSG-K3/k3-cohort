const getSql = "select * from student;"
const connection = require('../connection')

const getData = callback => {
    connection.query(getSql, (err,res) => {
    if (err) throw err; 
    else {callback(err,res.rows)}
})
}

module.exports = getData;