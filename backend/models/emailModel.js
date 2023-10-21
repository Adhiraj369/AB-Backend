const mongoose = require("mongoose");
const validator = require("validator");

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
})

module.exports = mongoose.model("Email", emailSchema);