const express = require("express");
const router = express.Router();
const { getVehicles, updateVehicle, deleteVehicle, getVehicle } = require("../controllers/vehicle");

router.route("/vehicles").get(getVehicles);
router.route("/vehicle/:type").get(getVehicle);
router.route("/vehicle/:type").put(updateVehicle);
router.route("/vehicle/:type").delete(deleteVehicle);

module.exports = router;
