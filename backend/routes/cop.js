const express = require("express");
const router = express.Router();
const { copSearch } = require("../controllers/cop");

router.route("/cop/search").post(copSearch);

module.exports = router;