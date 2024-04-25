// const mysql = require("mysql2/promise");
// require("dotenv").config();

// const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
//     database: process.env.DB_NAME
// });

// module.exports = connection;
const mongoose = require("mongoose");

const dbState = [
    {
        value: 0,
        label: "Disconnected"
    },
    {
        value: 1,
        label: "Connected"
    },
    {
        value: 2,
        label: "Connecting"
    },
    {
        value: 3,
        label: "Disconnecting"
    }
];

const connection = async () => {
    const options = { user: "root", pass: "123456", dbName: "dungvq" };
    await mongoose.connect("mongodb://localhost:27017", options);
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find((f) => f.value === state).label + " to database");
};

module.exports = connection;
