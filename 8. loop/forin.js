const cars = { name: "BMW", model: "z4", price: "120k" };
// object er moddhe loop calate hole for in
for (let x in cars) {
  console.log(x + ":");

  console.log(cars[x]);
}

const numbers = [12, 3, 2, 434, 434, 34, 4, 3];

for (let number in numbers) {
  console.log(numbers[number]);
}
