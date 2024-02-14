const express = require("express");
const router = express.Router();
const { getHomepage, getCreateUserPage, getUpdateUserPage, postCreateUser, postUpdateUser } = require("../controllers/userController");

router.get("/", getHomepage);
router.get("/create-user", getCreateUserPage);
router.get("/update-user/:userId", getUpdateUserPage);
router.post("/create-user-form", postCreateUser);
router.post("/update-user-form", postUpdateUser);

module.exports = router;
