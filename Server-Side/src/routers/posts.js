const express = require("express");
const app = express.Router();
const multer = require('multer');
const path = require('path');
const POST = require('../modules/posts');
const { body, validationResult } = require('express-validator');
const {newPost, deletePost} = require('../helpers/posts');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.normalize('./src/public/images'));
    },
    filename: function (req, file, cb) {
        cb(null,  "IMG-" + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({storage: storage});

/* Router Middlewares */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* new post Endpoint */
app.post("/new",  body("title").notEmpty().isLength({min: 1}).isString(),
body('body').notEmpty().isString(),
upload.single('image'),
newPost
);

app.get('/post/d/:id', deletePost);

module.exports = app;