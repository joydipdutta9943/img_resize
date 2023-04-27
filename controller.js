const sharp = require("sharp");
const { StatusCodes } = require("http-status-codes");

const resize = async (req, res) => {
  const { image } = req.body;
  const inputBuffer = Buffer.from(image, "base64");

  // Compressing the image
  const reducedSized = await sharp(inputBuffer)
    .webp({ quality: 25 })
    .toBuffer();

  // Resize to 1080
  const image_1080 = await sharp(reducedSized)
    .resize({
      fit: sharp.fit.contain,
      width: 1080,
    })
    .toBuffer();
  const outputImage_1080 = image_1080.toString("base64");

  // Resize to 1200
  const image_1200 = await sharp(reducedSized)
    .resize({
      fit: sharp.fit.contain,
      width: 1200,
    })
    .toBuffer();
  const outputImage_1200 = image_1200.toString("base64");

  // Resize to 1920
  const image_1920 = await sharp(reducedSized)
    .resize({
      fit: sharp.fit.contain,
      width: 1920,
    })
    .toBuffer();
  const outputImage_1920 = image_1920.toString("base64");

  res.status(StatusCodes.CREATED).json({
    outputImage_1080,
    outputImage_1200,
    outputImage_1920
  });
};

module.exports = {
  resize
};
