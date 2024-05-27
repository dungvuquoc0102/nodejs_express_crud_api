//add library mongoose
const mongoose = require("mongoose");
//create a schema
const customerSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        address: String,
        phone: String,
        email: String,
        image: String,
        description: String
    },
    { timestamps: true }
);
//create a model
const Customer = mongoose.model("Customer", customerSchema);
//export that model
module.exports = Customer;
