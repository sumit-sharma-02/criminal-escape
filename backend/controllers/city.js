const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const { setCities, getCities } = require("../data/static");

// Get All Cities => /api/v1/cities
exports.getCities = catchAsyncErrors(async (req, res, next) => {
  let cities = getCities();
  if (!cities.length) {
    return next(new ErrorHandler(`No City found!`, 404));
  }

  res.status(200).json({
    success: true,
    message: `Fetched ${
      cities.length === 1 ? "1 City" : cities.length + " Cities"
    } successfully!`,
    cities,
  });
});

// Get a city => /api/v1/city/:name
exports.getCity = catchAsyncErrors(async (req, res, next) => {
  let cities = getCities();
  const cityName = req.params.name;

  if (!cities.find((city) => city.name === cityName)) {
    return next(new ErrorHandler("City not found", 404));
  }

  res.status(200).json({
    success: true,
    city: cities.find((city) => city.name === cityName),
  });
});

// Update a City => /api/v1/city/:name
exports.updateCity = catchAsyncErrors(async (req, res, next) => {
  let cities = getCities();
  const cityName = req.params.name;
  const updatedCity = req.body;

  if (!cities.find((city) => city.name === cityName)) {
    return next(new ErrorHandler("City not found", 404));
  }

  setCities(
    cities.map((city) => (city.name === cityName ? {...city , ...updatedCity} : city))
  );

  res.status(200).json({
    success: true,
    message: "City updated successfully",
    city: { name: cityName, ...updatedCity },
  });
});

// Delete a City => /api/v1/city/:name
exports.deleteCity = catchAsyncErrors(async (req, res, next) => {
  let cities = getCities();
  const cityName = req.params.name;

  if (!cities.find((city) => city.name === cityName)) {
    return next(new ErrorHandler("City not found", 404));
  }

  setCities(cities.filter((city) => city.name !== cityName));

  res.status(200).json({
    success: true,
    message: "City deleted successfully",
  });
});
