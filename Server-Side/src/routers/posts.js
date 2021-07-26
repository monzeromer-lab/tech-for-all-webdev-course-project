const express = require("express");
const app = express.Router();

/* Router Middlewares */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* Register Endpoint */
app.post("/new", require('../helpers/posts').new);

module.exports = app;