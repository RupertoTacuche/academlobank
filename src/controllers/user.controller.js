const accountNumberGenerator = require("../utils/accountNumberGenerator");
const catchAsync = require("../utils/catchAsync")

exports.signup = catchAsync(async(req, res, next) => {
    const { name, password } = req.body;

    const accountNumber = accountNumberGenerator();

    console.log(accountNumber);
    return res.status(201).json({
        accountNumber,
    })

});

exports.login = catchAsync(async(req, res, next) => {
    res.status(200).json({
    ok: true,
    });
});
