const mysql = require('mysql2')
const pool = mysql.createPool({
    database: "practice_database",
    host: "localhost",
    user: "root",
    password: "Rajesh500@#"

})
module.exports = pool.promise()