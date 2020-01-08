let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile("index.html");
});

router.post('/', function (req, res, next) {
    let custom_req = req;
    custom_req.url = '/eval';
    return router.handle(custom_req, res, next);
});
module.exports = router;
