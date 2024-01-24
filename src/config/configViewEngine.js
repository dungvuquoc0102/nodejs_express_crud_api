const configViewEngine = (app) => {
    app.set("view engine", "ejs"); //2
    app.set("views", "./src/views/"); //2
};
module.exports = configViewEngine;
