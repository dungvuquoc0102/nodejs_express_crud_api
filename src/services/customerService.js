const Customer = require("../models/customer");

const createSingleCustomer = async (customerData) => {
    const result = await Customer.create(customerData);
    return result;
};

const createManyCustomersService = async (customersArray) => {
    const result = await Customer.insertMany(customersArray);
    return result;
};

const getCustomersService = async (limit, skip, filter) => {
    if (limit && skip && filter) {
        const offset = (skip - 1) * limit;
        return await Customer.find(filter).skip(offset).limit(limit).exec();
    } else {
        return await Customer.find({});
    }
};

const updateACustomerService = async (customer) => {
    return await Customer.updateOne({ _id: customer._id }, { name: customer.name, address: customer.address });
};

const deleteACustomerService = async (id) => {
    return await Customer.deleteById(id);
};

const deleteManyCustomersService = async (idArr) => {
    return await Customer.delete({ _id: { $in: idArr } });
};

module.exports = { createSingleCustomer, createManyCustomersService, getCustomersService, updateACustomerService, deleteACustomerService, deleteManyCustomersService };
