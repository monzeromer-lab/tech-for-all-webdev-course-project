const express = require("express");

const {
    post,
    home,
    newPost,
    newBlog
} = require("../helpers/renderer");

const app = express.Router();

/* Router Middlewares */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* renderers Endpoints */
app.get("/post", post);
app.get("/new", newBlog);
app.get("/", home);

module.exports = app;