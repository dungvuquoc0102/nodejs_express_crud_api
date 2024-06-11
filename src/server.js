const express = require("express");
const app = express();
require("dotenv").config(); //1
const configViewEngine = require("./config/configViewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const connection = require("./config/database");
const fileUpload = require("express-fileupload");
const { MongoClient } = require("mongodb");

const hostname = process.env.HOST_NAME || "127.0.0.1";
const port = process.env.PORT || 3001; //1
configViewEngine(app);
app.use(express.static("src/public")); //3
app.use(express.urlencoded({ extended: true })); //4
app.use(express.json({ type: "application/json", limit: "10mb" }));
app.use(fileUpload());

app.use("/", webRoutes);
app.use("/v1/api/", apiRoutes);

(async () => {
    try {
        //mongodb driver
        const url = process.env.DB_HOST;
        const client = new MongoClient(url);
        await client.connect();
        const dbName = process.env.DB_NAME;
        const db = client.db(dbName);
        const collection = db.collection("customers");
        // collection.insertOne({ name: "dung" });
        // const result = await collection.find({ name: "dung" }).toArray();
        // console.log(result);
        //mongoose
        // await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (err) {
        console.log(err);
    }
})();
