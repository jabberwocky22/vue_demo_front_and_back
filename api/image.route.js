// post.model.js

const express = require('express');
const images = express.Router();
const multer = require('multer');
const fs = require("fs");
const path = require("path");
// Require Post model in our routes module
//let Post = require('./post.model');

var upload = multer({
    dest: "some/path"
})


images.post('/', upload.single('image'), function (req, res) { //single("html_input_element_name")
    if (req.file.length === 0) { //判断一下文件是否存在，也可以在前端代码中进行判断。
        res.render("error", {
            message: "上传文件不能为空！"
        });
        return
    } else {
        let file = req.file;
        let fileInfo = {};
        // eslint-disable-next-line no-console
        console.log(file);
        // fs.renameSync('./upload/' + file.filename, './upload/' + file.originalname); //这里修改文件名字，比较随意。
        // 获取文件信息
        fileInfo.mimetype = file.mimetype;
        fileInfo.originalname = file.originalname;
        fileInfo.size = file.size;
        fileInfo.path = file.path;
        // 设置响应类型及编码
        res.set({
            'content-type': 'application/json; charset=utf-8'
        });
        res.json(fileInfo);
        res.end("上传成功！");
    }
});

module.exports = images;