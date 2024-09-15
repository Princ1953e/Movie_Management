const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload/images");
  },
  filename: function (req, file, cb) {
    const imgUpload = Date.now() + "*" + file.originalname;
    cb(null, file.fieldname + "-" + imgUpload);
  },
});

const imgageUpload = multer({ storage });

module.exports = imgageUpload;
