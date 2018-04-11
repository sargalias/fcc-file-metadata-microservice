const router = require('express').Router();
const path = require('path');
const multer  = require('multer');

const storage = multer.memoryStorage();
const upload = multer({storage: storage, limits: {fileSize: 1024*10}}).single('file');


router.post('/get-file-size', function(req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            if (err.code === "LIMIT_FILE_SIZE") {
                res.json({err: 'The file is too large.'});
                return;
            }
            res.json({err: err});
            return;
        }
        res.send({size: req.file.size});
    })
});

module.exports = router;
