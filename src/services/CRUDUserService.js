const connection = require("../config/database");
const User = require("../models/user");

const createUser = async (userInfo) => {
    if (userInfo.email && userInfo.name && userInfo.city) {
        // let [results, fields] = await connection.query("insert into Users (email, name, city) values (?, ?, ?)", [userInfo.email, userInfo.name, userInfo.city]);
        // return results;
        await User.create({
            email: userInfo.email,
            name: userInfo.name,
            city: userInfo.city
        });
    } else {
        throw new Error("Missing user information.");
    }
};

const getAllUser = async () => {
    // let [results, fields] = await connection.query("select * from Users");
    const results = await User.find({});
    return results;
};

const getUserById = async (userId) => {
    // const [results, fields] = await connection.query("select * from Users where id = ?", [userId]);
    // const userUpdate = results && results.length > 0 ? results[0] : {};
    const userUpdate = await User.findById(userId).exec();
    return userUpdate;
};

const updateUser = async (userUpdate) => {
    // const [results, fields] = await connection.query("update Users set email = ?, name = ?, city = ? where id = ?", [userUpdate.email, userUpdate.name, userUpdate.city, userUpdate.id]);
    await User.updateOne({ _id: userUpdate.id }, { email: userUpdate.email, name: userUpdate.name, city: userUpdate.city }).exec();
    // return results;
};

const deleteUser = async (userId) => {
    // const [results, fields] = await connection.query("delete from Users where id = ?", [userId]);
    await User.deleteOne({ _id: userId });
    // return results;
};

module.exports = {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
};
