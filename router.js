const express = require("express");
const router = express.Router();
const { resize } = require("./controller");

router.post("/resize", resize);

module.exports = router;
