const connection = require("../config/database");
const { createUser, getAllUser, getUserById, updateUser } = require("../services/CRUDUser");
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
const getUpdateUserPage = async (req, res) => {
    const userId = req.params.userId;
    const userUpdate = await getUserById(userId);
    return res.render("updateUser.ejs", {userUpdate: userUpdate});
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

const postUpdateUser = async (req, res) => {
    const {id, email, name, city} = req.body;
    const userUpdate = {id, email, name, city};
    await updateUser(userUpdate);
    return res.redirect("/");
};

module.exports = { getHomepage, getCreateUserPage, getUpdateUserPage, postCreateUser, postUpdateUser };
