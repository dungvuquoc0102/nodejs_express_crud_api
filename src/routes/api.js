const express = require("express");
const router = express.Router();
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI } = require("../controllers/apiUserController");

router.get("/users", getUsersAPI);
router.post("/users", postCreateUserAPI);
router.put("/users", putUpdateUserAPI);
router.delete("/users", deleteUserAPI);
router.post("/file", postUploadSingleFileAPI);

module.exports = router;
