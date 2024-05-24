const User = require("../models/user");
const { storeSingleFile, storeMultipleFiles } = require("../services/fileService");

const getUsersAPI = async (req, res) => {
    const users = await User.find({});
    res.status(200).json({
        errorCode: 0,
        data: users
    });
};
const postCreateUserAPI = async (req, res) => {
    const { email, name, city } = req.body;
    const user = await User.create({ email, name, city });
    res.status(201).json({
        errorCode: 0,
        data: user
    });
};
const putUpdateUserAPI = async (req, res) => {
    const { userId, email, name, city } = req.body;
    const results = await User.updateOne({ _id: userId }, { email, name, city });
    return res.status(200).json({
        EC: 0,
        data: results
    });
};
const deleteUserAPI = async (req, res) => {
    const userId = req.body.userId;
    const results = await User.deleteOne({ _id: userId });
    return res.status(200).json({
        EC: 0,
        data: results
    });
};
const postUploadSingleFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length == 0) {
        return res.status(400).json({
            EC: 1,
            data: "No files have been uploaded"
        });
    }
    try {
        await storeSingleFile(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: "File uploaded"
        });
    } catch (err) {
        console.log(">>> check err: ", err);
        return res.status(500).json({
            EC: 1,
            data: err
        });
    }
};

const postUploadMultipleFilesAPI = async (req, res) => {
    //check req.files
    if (!req.files || Object.keys(req.files).length == 0) {
        return res.status(400).json({
            EC: 1,
            data: "No files have been uploaded"
        });
    }
    //save image
    if (Array.isArray(req.files.image)) {
        try {
            const result = await storeMultipleFiles(req.files.image);
            return res.status(200).json({
                EC: 0,
                data: result
            });
        } catch (err) {
            return res.status(500).json({
                EC: 1,
                data: "Error for uploading"
            });
        }
    } else {
        await postUploadSingleFileAPI(req, res);
    }
};

module.exports = { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFilesAPI };
