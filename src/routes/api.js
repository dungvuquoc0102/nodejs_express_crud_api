const express = require("express");
const router = express.Router();
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFilesAPI } = require("../controllers/apiUserController");
const { postCreateCustomerAPI, postCreateManyCustomersAPI, getCustomersAPI } = require("../controllers/apiCustomerController");

router.post("/customers", postCreateCustomerAPI);
router.post("/customers-many", postCreateManyCustomersAPI);
router.get("/customers", getCustomersAPI);

router.get("/users", getUsersAPI);
router.post("/users", postCreateUserAPI);
router.put("/users", putUpdateUserAPI);
router.delete("/users", deleteUserAPI);

router.post("/file", postUploadSingleFileAPI);
router.post("/files", postUploadMultipleFilesAPI);

module.exports = router;
