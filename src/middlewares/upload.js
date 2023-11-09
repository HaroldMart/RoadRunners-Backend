const multer  = require('multer');

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
            cb(null, true);
        } else {
            cb(null, false);
            return cb('only JPEG, PNG and JPG files are supported');
        }
    }
});

module.exports = upload;