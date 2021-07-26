// eslint-disable-next-line no-unused-vars
const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const users = sequelize.define("users", {
    id : {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    username : {
        type : DataTypes.STRING,
        allowNull : false,
        unique: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type : DataTypes.ENUM('user','admin'),
        allowNull:false,
        defaultValue : 'user'
    }
    }, {
        freezeTableName: true
    }
);
users.sync({force:true});
module.exports = users;