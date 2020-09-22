const mysql = require("mysql");
require("dotenv").config();

const util = require("util");

const con = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

const query = util.promisify(con.query).bind(con)

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = {
    con, query
}