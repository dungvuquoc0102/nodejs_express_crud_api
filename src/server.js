const express = require("express");
const app = express();
require("dotenv").config(); //1
const configViewEngine = require("./config/configViewEngine");
const webRoutes = require("./routes/web");

const hostname = process.env.HOST_NAME || "127.0.0.1";
const port = process.env.PORT || 3001; //1
configViewEngine(app);
app.use(express.static("src/public")); //3
app.use(express.urlencoded({ extended: true })); //4

app.use("/", webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
