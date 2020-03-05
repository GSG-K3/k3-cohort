const connection = require('../connection')

const emailAuthentication = email => {
    const getSql = {
        text: `select * from users where email = ($1)`,
        value: [email]
    }
    
    return connection
    .query(getSql,[email])
    .then(res => res.rows[0])
    .catch(err => console.log(err))
}

module.exports = emailAuthentication;