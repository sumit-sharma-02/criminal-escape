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

  const { cops } = req.body;

  let criminalFound;

  cops.map(cop => {
    if (!cop.city) {
      return next(new ErrorHandler("Please provide city of the cop.", 403));
    }
  
    if (!cop.vehicle) {
      return next(new ErrorHandler("Please provide vehicle of the cop.", 403));
    }
  
    if (!cop.name) {
      return next(new ErrorHandler("Please provide the cop name.", 403));
    }
  
    if (!cities.find((city) => city.name === cop.city)) {
      return next(new ErrorHandler("City not found", 404));
    }
  
    if (!vehicles.find((vehicle) => vehicle.type === cop.vehicle)) {
      return next(new ErrorHandler("Vehicle not found", 404));
    }
  
    const copDistance = cities.find((city) => city.name === cop.city).distance;
    const vehicleRange = vehicles.find(
      (vehicle) => vehicle.type === cop.vehicle
    ).range;
  
    if (copDistance <= vehicleRange && cop.city === fugitiveLocation) {
      criminalFound = cop
    }
  })

  if(criminalFound) {
    res.status(200).json({
      success: true,
      copName: criminalFound.name,
      message: "Criminal found successfully!",
    });
  } else {
    res.status(200).json({
      success: false,
      message: "No criminal found!",
    });
  }
});
