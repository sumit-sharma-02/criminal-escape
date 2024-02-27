const express = require("express");
const router = express.Router();
const { getCities, updateCity, deleteCity, getCity } = require("../controllers/city");

router.route("/cities").get(getCities);
router.route("/city/:name").get(getCity);
router.route("/city/:name").put(updateCity);
router.route("/city/:name").delete(deleteCity);

module.exports = router;
