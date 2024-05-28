const { storeSingleFile } = require("../services/fileService");
const { createSingleCustomer, createManyCustomersService, getCustomersService } = require("../services/customerService");

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

module.exports = { postCreateCustomerAPI, postCreateManyCustomersAPI, getCustomersAPI };
