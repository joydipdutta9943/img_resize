const sharp = require("sharp");
const { StatusCodes } = require("http-status-codes");

const resize = (req, res) => {
  const image = req.file;
  console.log(image);
  const result = sharp(image)
    .resize({ width: 300 })
    .webp({ quality: 75 })
  res.status(StatusCodes.CREATED).json(result);
};

module.exports = {
  resize,
};
