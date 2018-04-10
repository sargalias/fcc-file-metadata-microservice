const router = require('express').Router();
const multer = require('multer');


router.get('/get-file-size', function(req, res, next) {
    res.json({size: 1280});
});

module.exports = router;
