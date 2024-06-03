const { storeSingleFile } = require("../services/fileService");
const { createSingleCustomer, createManyCustomersService, getCustomersService, updateACustomerService, deleteACustomerService } = require("../services/customerService");

const postCreateCustomerAPI = async (req, res) => {
    const { email, name, city, phone } = req.body;
    let imageURL = "";
    if (!req.files || Object.keys(req.files).length == 0) {
    } else {
        const result = await storeSingleFile(req.files.image);
        imageURL = result.path;
    }
    const customerData = {
        email,
        name,
        city,
        phone,
        image: imageURL
    };
    try {
        const customer = await createSingleCustomer(customerData);
        return res.status(200).json({
            EC: 0,
            data: customer
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            EC: 1,
            data: "Error for create customer"
        });
    }
};

const postCreateManyCustomersAPI = async (req, res) => {
    try {
        const customers = await createManyCustomersService(req.body.customers);
        return res.status(200).json({
            EC: 0,
            data: customers
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            EC: 1,
            data: "Error for creating customers"
        });
    }
};

const getCustomersAPI = async (req, res) => {
    try {
        const customers = await getCustomersService();
        return res.status(200).json({
            EC: 0,
            data: customers
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            EC: 1,
            data: "Error for getting customers"
        });
    }
};

const updateACustomerAPI = async (req, res) => {
    try {
        const { _id, name, address } = req.body;
        const result = await updateACustomerService({ _id, name, address });
        return res.status(200).json({
            EC: 0,
            data: result
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            EC: 1,
            data: "Error for updating customer"
        });
    }
};

const deleteACustomerAPI = async (req, res) => {
    try {
        const result = await deleteACustomerService(req.body.id);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            EC: 1,
            data: "Error for deleting customer"
        });
    }
};

const deleteManyCustomersAPI = async (req, res) => {
    res.send("Hello");
};

module.exports = { postCreateCustomerAPI, postCreateManyCustomersAPI, getCustomersAPI, updateACustomerAPI, deleteACustomerAPI, deleteManyCustomersAPIs };
