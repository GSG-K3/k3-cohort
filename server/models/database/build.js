const fs = require("fs");
const path = require('path')

const dbConnection = require("./connection");

const sql = fs.readFileSync(path.join(__dirname,'build.sql')).toString();
const sql1 = fs.readFileSync(path.join(__dirname,'db_build.sql')).toString();
const runDbBuild = cb => dbConnection.query(sql, cb);

runDbBuild((err, res) => {
    if (err) {
        throw err;
    }
    return res;
});

// const readDbBuild = cb => dbConnection.query(sql1, cb);

// readDbBuild((err, res) => {
//     if (err) {
//         throw err;
//     }
//     return res;
// });
// module.exports = {runDbBuild , readDbBuild};
module.exports = runDbBuild;