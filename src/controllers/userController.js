const connection = require("../config/database");
const { createUser, getAllUser, getUserById, updateUser, deleteUser } = require("../services/CRUDUser");
const getHomepage = async (req, res) => {
    try {
        // const results = await getAllUser();
        const results = [];
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
    return res.render("updateUser.ejs", { userUpdate: userUpdate });
};
const getDeleteUser = async (req, res) => {
    const userId = req.params.userId;
    await deleteUser(userId);
    return res.redirect("/");
};
const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body;
    try {
        await createUser({ email, name, city });
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
};

const postUpdateUser = async (req, res) => {
    const { id, email, name, city } = req.body;
    const userUpdate = { id, email, name, city };
    await updateUser(userUpdate);
    return res.redirect("/");
};

module.exports = { getHomepage, getCreateUserPage, getUpdateUserPage, getDeleteUser, postCreateUser, postUpdateUser };
