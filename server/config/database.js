import mysql from "mysql2"

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'NewPassword',
    database: 'clients'
});

export default db;