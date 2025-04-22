// // config.js

// module.exports = {
//     dbConfig: {
//         user: 'your_db_username',
//         password: 'your_db_password',
//         server: 'localhost',
//         database: 'your_db_name',
//         options: {
//             encrypt: true,
//             trustServerCertificate: true,
//         },
//     },
//     port: 5000,
// };







require("dotenv").config();
const mysql = require("mysql2");

// Railway-provided MySQL connection string
const urlDB = 'mysql://root:OrbLQQfIBIBEobOVpVorqFSVGlFdeqsY@mysql.railway.internal:3306/railway';

// Create connection
const connection = mysql.createConnection(urlDB);

// Connect to database
connection.connect((err) => {
    if (err) {
        console.error("❌ MySQL connection failed:", err.stack);
        return;
    }
    console.log("✅ Connected to MySQL database on Railway!");
});

module.exports = connection;
