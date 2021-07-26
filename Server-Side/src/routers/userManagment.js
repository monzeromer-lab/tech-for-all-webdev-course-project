const express = require("express");
const app = express.Router();

/* Router Middlewares */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* Register Endpoint */
app.post("/register", require('../helpers/userManagment').register);
app.post("/login" , require("../helpers/userManagment").login);

module.exports = app;