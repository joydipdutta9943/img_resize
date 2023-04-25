const multer = require("multer");

const middleware = async (req, res, next) => {
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 25 * 1024 * 1024 }, // 25MB
  });
  upload.single("image")(req, res, next);
};

module.exports = { middleware };
