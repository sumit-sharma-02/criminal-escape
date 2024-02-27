const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const { setVehicles, getVehicles } = require("../data/static");

// Get all vehicles => /api/v1/vehicles
exports.getVehicles = catchAsyncErrors(async (req, res, next) => {
  let vehicles = getVehicles();
  if (!vehicles.length) {
    return next(new ErrorHandler(`No Vehicle found!`, 404));
  }

  res.status(200).json({
    success: true,
    message: `Fetched ${
      vehicles.length === 1 ? "1 Vehicle" : vehicles.length + " Vehicles"
    } successfully!`,
    vehicles: vehicles,
  });
});

// Get a vehicle => /api/v1/vehicle/:type
exports.getVehicle = catchAsyncErrors(async (req, res, next) => {
  const vehicleType = req.params.type;
  let vehicles = getVehicles();

  if (!vehicles.find((vehicle) => vehicle.type === vehicleType)) {
    return next(new ErrorHandler("Vehicle not found", 404));
  }

  res.status(200).json({
    success: true,
    vehicle: vehicles.find((vehicle) => vehicle.type === vehicleType),
  });
});

// Update a vehicle => /api/v1/vehicle/:type
exports.updateVehicle = catchAsyncErrors(async (req, res, next) => {
  const vehicleType = req.params.type;
  const updatedVehicle = req.body;
  let vehicles = getVehicles();

  if (!vehicles.find((vehicle) => vehicle.type === vehicleType)) {
    return next(new ErrorHandler("Vehicle not found", 404));
  }

  setVehicles(
    vehicles.map((vehicle) =>
      vehicle.type === vehicleType ? {...vehicle , ...updatedVehicle} : vehicle
    )
  );

  res.status(200).json({
    success: true,
    message: "Vehicle updated successfully",
    vehicle: { type: vehicleType, ...updatedVehicle },
  });
});

// Delete a vehicle => /api/v1/vehicle/:type
exports.deleteVehicle = catchAsyncErrors(async (req, res, next) => {
  const vehicleType = req.params.type;
  let vehicles = getVehicles();

  if (!vehicles.find((vehicle) => vehicle.type === vehicleType)) {
    return next(new ErrorHandler("Vehicle not found", 404));
  }

  setVehicles(vehicles.filter((vehicle) => vehicle.type !== vehicleType));

  res.status(200).json({
    success: true,
    message: "Vehicle deleted successfully",
  });
});
