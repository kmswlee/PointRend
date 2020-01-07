const express = require('express');
const utils = require('../utils/index');
const router = express.Router();
const multer = require("multer");
const fs = require('fs');
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
        //await res.send('http://35.200.74.68/output.png');
       // await res.redirect('../result.html');
        var s = fs.createReadStream('/workspace/public/output.png');
        s.on('open', function () {
        res.set('Content-Type', 'image/png');
        s.pipe(res);
        });
    }    
});

module.exports = router;
