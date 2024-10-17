/* 
1. Declare an array named 'teaFlavours' that contains the strings '"green tea" , "black tea", and "oolong tea"'.
    Access the first element of the array and store it in a variable named 'firstTea'.
*/

let teaFlavours = ["green tea", "black tea", "oloong tea"];
const firstTea = teaFlavours[0];
// console.log(firstTea);

/* 
2. Declare an array named 'cities' containing ' "London" , "Tokyo", "Paris" and "New York"'.
    Access the third element in the array and store it in a variable named 'favoriteCity'.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];
// console.log(favoriteCity);

/* 
3. Declare an array named 'teaType' containing ' "herbal tea" , "white tea",and "masala chai"'.
    Change the second element of the array to '"jasmine tea"'.
*/

let teaType = ["herbal tea", "white tea", "masala tea"];
teaType[1] = "jasmine tea";
// console.log(teaType);

/* 
4. Declare an array named 'citiesVisited' containing ' "Mumbai" and "Sydney"'.
    Add '"Berlin"' to the array using the 'push' method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
// console.log(citiesVisited);

/*
5.you have an array named 'tea Orders' with ' "chai", "iced tea", "matcha", and earl grey '.
    Remove the last elememt of the array using the 'pop' method and store it in a variable named 'lastOrder'.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const remaining = teaOrders.pop();
// console.log(teaOrders);
// console.log(remaining);

/*
6.You have an array named 'popularTeas' containing ' "green tea", "oolong tea", and "chai" '.
    Create a soft copy of this array named 'softcopyTeas'.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];
let softcopyTeas = popularTeas;
popularTeas.pop();
// console.log(softcopyTeas);
// console.log(popularTeas);

/*
7.You have an array named 'topCities' containing ' "Berlin", "Singapore", and "New York" '.
    Create a Hard copy of this array named 'hardcopyCities'.
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardcopyCities = [...topCities]; // *** point to remmember ***
topCities.pop();
// console.log(hardcopyCities);
// console.log(topCities);

/*
8.You have two arrays: 'europeanCities' containing ' "Paris" and "Rome"' and 'asianCities' containing ' "Tokyo" and "Bangkok"'.
    Merge these two arrays into a new array named 'worldCities'.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
// console.log(worldCities);

/*
9.You have two arrays: 'teaMenu' containing ' "masala chai", "oolong tea", "green tea", and "earl grey"'.
    Find the length of the array and store it in a variable named menuLength.
*/

let teaMenu = ["masala tea", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
// console.log(menuLength);

/*
10. You have an array named 'cityBucketList' containing ' "kyoto", "London", "cape Town", and "Vancouver"'.
    Check if ' "London"' is in the array and store the result in a variable  named 'isLondonInList'. 
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
