const express = require("express");
const router = express.Router();
const { getHomepage, getCreateUserPage, getUpdateUserPage, postCreateUser } = require("../controllers/userController");

router.get("/", getHomepage);
router.get("/create-user", getCreateUserPage);
router.get("/update-user/:userId", getUpdateUserPage);
router.post("/create-user-form", postCreateUser);

module.exports = router;
