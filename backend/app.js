const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.use('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: "fsfsdfdsdf",
            title: "1st title from the server side",
            content: "1st content from the server side"
        },
        {
            id: "dsadadasadas",
            title: "2nd title from the server side",
            content: "2nd content from the server side"
        }
    ];

    res.status(200).json({ posts: posts });

    res.json(posts);
});

module.exports = app;


