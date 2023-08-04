const User = require('../models/user.model');
const catchAsync = require("../utils/catchAsync");
const AppError = require('../utils/appError');


exports.validUser = catchAsync(async (req, res, next) => {
    const { accountNumber } = req.body;
    //const { email } = req.body;

    const user = await User.findOne({
      where: {
        accountNumber,
        status: true,
         },
    });
console.log(user);
if (!user)
    return next(
        new AppError(`user with accountNumber: ${accountNumber} not found`) 
    ); 

  req.user = user;
  next();
});

