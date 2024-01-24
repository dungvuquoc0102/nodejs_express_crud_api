const express = require("express");
const app = express();
require("dotenv").config(); //1
const configViewEngine = require("./src/config/configViewEngine");
const webRoutes = require("./src/routes/web");

const hostname = "127.0.0.1";
const port = process.env.PORT || 3001; //1
configViewEngine(app);
app.use(express.static("src/public")); //3

app.use("/", webRoutes);

const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "123456",
    database: "filmHub"
});
connection.query("SELECT * FROM Films f", (err, results, fields) => {
    console.log(results);
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
