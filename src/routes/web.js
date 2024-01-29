const express = require("express");
const router = express.Router();
const { getHomepage, getCreateUserPage, postCreateUser } = require("../controllers/userController");

router.get("/", getHomepage);
router.get("/create-user", getCreateUserPage);
router.post("/create-user-form", postCreateUser);

module.exports = router;
