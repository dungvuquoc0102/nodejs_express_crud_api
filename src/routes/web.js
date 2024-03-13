const express = require("express");
const router = express.Router();
const { getHomepage, getCreateUserPage, getUpdateUserPage, getDeleteUser, postCreateUser, postUpdateUser } = require("../controllers/userController");

router.get("/", getHomepage);
router.get("/create-user", getCreateUserPage);
router.get("/update-user/:userId", getUpdateUserPage);
router.get("/delete-user/:userId", getDeleteUser);
router.post("/create-user-form", postCreateUser);
router.post("/update-user-form", postUpdateUser);

module.exports = router;
