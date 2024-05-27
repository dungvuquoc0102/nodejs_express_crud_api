const Customer = require("../models/customer");

const createSingleCustomer = async (customerData) => {
    const result = await Customer.create(customerData);
    return result;
};

const createManyCustomersService = async (customersArray) => {
    const result = await Customer.insertMany(customersArray);
    return result;
};

module.exports = { createSingleCustomer, createManyCustomersService };
