const connection = require("../config/database");
const { createUser, getAllUser } = require("../services/CRUDUser");
const getHomepage = async (req, res) => {
    const results = await getAllUser();
    return res.render("home.ejs", { userList: results });
};
const getCreateUserPage = (req, res) => {
    return res.render("createUser.ejs");
};
const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body;
    try {
        await createUser({ email, name, city });
        res.send("Create User Successfully");
    } catch (err) {
        console.log(err);
    }
};

module.exports = { getHomepage, getCreateUserPage, postCreateUser };
