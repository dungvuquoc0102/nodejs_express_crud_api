//add library mongoose, mongoose-delete
const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
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
//add plugin to schema - more query can do with plugin
customerSchema.plugin(mongoose_delete, { overrideMethods: "all" });
//create a model
const Customer = mongoose.model("Customer", customerSchema);
//export that model
module.exports = Customer;
