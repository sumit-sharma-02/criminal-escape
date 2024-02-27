// In-memory storage
var cities = [
  {
    name: "Yapkashnagar",
    title: "The Neon Oasis",
    description: "Glowing alleys and rooftop races, powered by solar energy.",
    distance: 60,
    image: "https://i.ibb.co/fv750Z1/Yapkashnagar.png",
  },
  {
    name: "Lihaspur",
    title: "The Misty Labyrinth",
    description: "Ancient temples shrouded in fog, whispers of forgotten tech.",
    distance: 50,
    image: "https://i.ibb.co/XYDqD0C/Lihaspur.png",
  },
  {
    name: "Narmis City",
    title: "The Steel Jungle",
    description: "Towering skyscrapers and hidden underground networks.",
    distance: 40,
    image: "https://i.ibb.co/WsSzzdD/Narmis.png",
  },
  {
    name: "Shekharvati",
    title: "The Sun-Kissed Valley",
    description: "Rolling hills and forgotten mining tunnels.",
    distance: 30,
    image: "https://i.ibb.co/4SyzfLJ/Shekharvati.png",
  },
  {
    name: "Nuravgram",
    title: "The Quirky Village",
    description: "Talking robots and malfunctioning AI guardians.",
    distance: 20,
    image: "https://i.ibb.co/QjxpmhJ/Nuravgram.png",
  },
];

function setCities(updatedCities) {
  cities = updatedCities;
}

function getCities() {
  return cities;
}

var vehicles = [
  {
    type: "EV Bike",
    range: 60,
    count: 2,
    image: "https://i.ibb.co/2tsgW2F/EV-Bike.png",
  },
  {
    type: "EV Car",
    range: 100,
    count: 1,
    image: "https://i.ibb.co/C8zvwFG/EV-Car.png",
  },
  {
    type: "EV SUV",
    range: 120,
    count: 1,
    image: "https://i.ibb.co/yhTZyzZ/EV-SUV.png",
  },
];

function setVehicles(updatedVehicles) {
  vehicles = updatedVehicles;
}

function getVehicles() {
  return vehicles;
}

module.exports = {
  cities,
  vehicles,
  setCities,
  setVehicles,
  getCities,
  getVehicles,
};
