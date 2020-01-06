let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(__dirname);
    // res.json({ok : 200});
    res.sendFile(`${__dirname}/../public/result.html`);
});

module.exports = router;
