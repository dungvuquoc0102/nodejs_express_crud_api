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

module.exports = {
    createUser,
    getAllUser
};
