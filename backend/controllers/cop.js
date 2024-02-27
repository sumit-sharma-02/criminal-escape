const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const {
  setCities,
  getCities,
  setVehicles,
  getVehicles,
} = require("../data/static");

let cities = getCities();
let fugitiveLocation = cities[Math.floor(Math.random() * cities.length)].name; // Simulated fugitive location
console.log("Fugitive Location ->", fugitiveLocation)

// Cop Search => /api/v1/cop/search
exports.copSearch = catchAsyncErrors(async (req, res, next) => {
  let cities = getCities();
  let vehicles = getVehicles();

  const { copCity, copVehicle, copName } = req.body;

  if (!copCity) {
    return next(new ErrorHandler("Please provide city of the cop.", 403));
  }

  if (!copVehicle) {
    return next(new ErrorHandler("Please provide vehicle of the cop.", 403));
  }

  if (!copName) {
    return next(new ErrorHandler("Please provide the cop name.", 403));
  }

  if (!cities.find((city) => city.name === copCity)) {
    return next(new ErrorHandler("City not found", 404));
  }

  if (!vehicles.find((vehicle) => vehicle.type === copVehicle)) {
    return next(new ErrorHandler("Vehicle not found", 404));
  }

  const copDistance = cities.find((city) => city.name === copCity).distance;
  const vehicleRange = vehicles.find(
    (vehicle) => vehicle.type === copVehicle
  ).range;

  if (copDistance <= vehicleRange && copCity === fugitiveLocation) {
    res.status(200).json({
      success: true,
      copName: copName,
      message: "Criminal found successfully!",
    });
  } else {
    res.status(200).json({
      success: false,
      message: "No criminal found!",
    });
  }
});
