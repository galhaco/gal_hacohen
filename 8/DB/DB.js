//import
const SQL = require ('mysql');
const dbconfig = require('./DB_config');

//create connection
const connection = SQL.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB
});

//open the connection
connection.connect(error=>{
    if (error) {
        throw error;
    }
    console.log ("connected to DB");
});
module.exports = connection;