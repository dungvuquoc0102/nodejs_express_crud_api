const connection = require("../config/database");

const createUser = async (userInfo) => {
    if (userInfo.email && userInfo.name && userInfo.city) {
        let [results, fields] = await connection.query("insert into Users (email, name, city) values (?, ?, ?)", [userInfo.email, userInfo.name, userInfo.city]);
        return results;
    } else {
        throw new Error("Missing user information.");
    }
};

const getAllUser = async () => {
    let [results, fields] = await connection.query("select * from Users");
    return results;
};

const getUserById = async (userId) => {
    const [results, fields] = await connection.query("select * from Users where id = ?", [userId]);
    const userUpdate = results && results.length > 0 ? results[0] : {};
    return userUpdate;
};

const updateUser = async (userUpdate) => {
    const [results, fields] = await connection.query("update Users set email = ?, name = ?, city = ? where id = ?", [userUpdate.email, userUpdate.name, userUpdate.city, userUpdate.id]);
    return results;
};

const deleteUser = async (userId) => {
    const [results, fields] = await connection.query("delete from Users where id = ?", [userId]);
    return results;
};

module.exports = {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
};
