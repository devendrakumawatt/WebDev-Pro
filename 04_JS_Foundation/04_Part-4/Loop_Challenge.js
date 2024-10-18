/*
1.Write a 'While' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum'.
*/

let num = 1;
let sum = 0;
while (num <= 5) {
  sum += num;
  num++;
}
// console.log("Sum of 1 to 5 is : ", sum);

/*
2.Write a 'While' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'.
*/

let count = 5;
let countdown = [];

while (count >= 1) {
  countdown.push(count);
  count--;
}
// console.log(countdown);

/*
3. Write a 'do while' loop that prompts a user to enter their favorite tea type until they enter '"Stop"'.
    Store each tea type in an array named 'teaCollection'.
*/

let teaCollection = [];
let tea;

// do {
//     tea = prompt(`Enter your favorite tea (type "stop" to finish)`);
//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");

/*
4.Write a 'do while' loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'.
*/

let total = 0;
let k = 1;

do {
  total += k;
  k++;
} while (k <= 3);
// console.log("Total is : ", total);

/*
5.Write a 'for' loop that multiplies each element in the array '[2, 4, 6]' by 2 and stores the results in a new array named 'multipliedNumber'.
*/

let arr = [2, 4, 6];
let multipliedNumber = [];

for (let i = 0; i < arr.length; i++) {
  multipliedNumber.push(2 * arr[i]);
}
// console.log("Multiplied array : ", multipliedNumber);

/*
6.Write a 'for' loop that lists all the cities int the array '["Paris", "New York", "Tokyo", "London"]' and stores each city in a new array named 'cityList'.
*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let c = 0; c < cities.length; c++) {
  let myCity = cities[c];
  cityList.push(myCity);
}
// console.log(cityList);
