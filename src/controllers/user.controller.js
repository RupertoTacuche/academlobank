const User = require("../models/user.model");
const accountNumberGenerator = require("../utils/accountNumberGenerator");
const catchAsync = require("../utils/catchAsync");
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');

exports.signup = catchAsync(async(req, res, next) => {
    const { name, password } = req.body;

    const accountNumber = accountNumberGenerator();

    //la parte de encriptacion
    const user = await User.create({
        name,
        password,
        accountNumber,
        amount:1000,
    });

    const token = await generateJWT(user.id);

    return res.status(201).json({
        status: 'success',
        token,
        user,
    })

});

exports.login = catchAsync(async(req, res, next) => {
    res.status(200).json({
    ok: true,
    });
});
