const express = require('express');
const utils = require('../utils/index');
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${__dirname}/../images/`);
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}.jpg`);
    }
});
const upload = multer({storage: storage});

router.post('/', upload.fields([
    {name : 'image1', maxCount: 1},
    {name : 'image2', maxCount: 1},
]), async (req, res) => {
    console.log(req.files);
    if (!req.files) {
        await res.sendStatus(500);
    } else {
        console.log(req.files);
        const predict = await utils.runPython();
        // console.log(__dirname);
        await res.redirect('../result.html');
    }    
});

module.exports = router;
