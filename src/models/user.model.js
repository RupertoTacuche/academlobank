const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const User = db.define('user', {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        DataTypes: DataTypes.INTEGER, 
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    accountNumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false, 
    },

    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },

});
    

module.exports = User;