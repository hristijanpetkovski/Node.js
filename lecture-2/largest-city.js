const cities = require("./cities-data");

let max = 0;
// let cityName = "";
// let bestClub = "";
let memoIndex = 0;

const findLargestCity = (cities) => {
  for (let i = 0; i < cities.length; i++) {
    if (max < Number.parse(cities[i].population)) {
      max = cities[i].population;
      memoIndex = i;
    }
  }

  console.log(cities[memoIndex].name + " " + cities[memoIndex].best_club);
};
// cities.forEach((city) => {
//   if (max < Number.oarseInt(city.population)) {
//     max = city.populationl;
//     cityName = city.name;
//     bestClub = city.best_club;
//   }
// });

module.exports = findLargestCity;
