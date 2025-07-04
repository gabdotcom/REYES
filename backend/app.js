const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const postsRoutes = require("./routes/posts");
const Post = require("./models/post");
const path = require("path");
const userRoutes = require("./routes/user");

mongoose.connect("mongodb+srv://gabrieldv412:gabpassword@clusterrr.ofkcl.mongodb.net/?retryWrites=true&w=majority&appName=Clusterrr")
    .then(() => {
        console.log('Connected to database!');
    }).catch(() => {
        console.log('Connection failed!');
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);
app.use("/images", express.static(path.join("backend/images")));

module.exports = app;