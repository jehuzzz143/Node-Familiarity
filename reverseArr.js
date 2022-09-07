const cars = ["Saab", "Volvo", "BMW"];
const newCars = [];

console.log('Correct Format array');
console.log(cars);

console.log('Reverse Array')
for(var i= cars.length-1;i >=0 ;i--){
    newCars.push(cars[i]);
}
console.log(newCars)
console.log(cars.reverse()) //reverse ()


