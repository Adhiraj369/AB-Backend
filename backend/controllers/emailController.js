const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Email = require("../models/emailModel");
const sendToken = require("../utils/jwtToken");


//Input Email

exports.newEmail = catchAsyncErrors(async (req, res, next) => {

    const { email } = req.body;

    const emails = await Email.create({
        email
    });

    res.status(201).json({
        success: true,
        emails,
    });
});

//Get all emails (Admin)

exports.getAllEmail = catchAsyncErrors(async (req, res, next) => {
    const emails = await Email.find();

    res.status(200).json({
        success: true,
        emails,
    });
});