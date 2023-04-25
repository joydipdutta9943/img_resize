const express = require("express");
const router = express.Router();
const { resize } = require("./controller");
const { middleware } = require("./middleware");
router.post("/resize", middleware, resize);

module.exports = router;
