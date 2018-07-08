"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors_prefetch_middleware_1 = require("cors-prefetch-middleware");
var images_upload_middleware_1 = require("images-upload-middleware");
var app = express();
app.use(cors_prefetch_middleware_1.default);
app.use('/static', express.static('./static'));
app.get("/", function (req, res) {
    res.send('Your server is connected!');
});
app.post('/multiple', images_upload_middleware_1.default('./static/multipleFiles', 'http://localhost:9090/static/multipleFiles', true));
app.listen(9090, function () {
    console.log('Listen: 9090');
});
