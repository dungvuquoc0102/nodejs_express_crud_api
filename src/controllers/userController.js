const connection = require("../config/database");
const { createUser, getAllUser } = require("../services/CRUDUser");
const getHomepage = async (req, res) => {
    try {
        const results = await getAllUser();
        return res.render("home.ejs", { userList: results });
    } catch (err) {
        console.log(err);
    }
};
const getCreateUserPage = (req, res) => {
    return res.render("createUser.ejs");
};
const getUpdateUserPage = (req, res) => {
    const userId = req.params.userId;
     
    return res.render("updateUser.ejs");
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

module.exports = { getHomepage, getCreateUserPage, getUpdateUserPage, postCreateUser };
