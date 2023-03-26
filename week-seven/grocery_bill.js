console.log("Grocery Bill")
console.log("-----------------")
// Write a grocery bill for 3 items

const ricePrice = 3.99
const beansPrice = 2.99
const eggsPrice = 1.99

const riceQty = 2
const beansQty = 3
const eggsQty = 12

const riceTotal = ricePrice * riceQty
const beansTotal = beansPrice * beansQty
const eggsTotal = eggsPrice * eggsQty

console.log(`Rice: $${ricePrice} x ${riceQty}: $` + riceTotal)
console.log(`Beans: $${beansPrice} x ${beansQty}: $` + beansTotal)
console.log(`Eggs: $${eggsPrice} x ${eggsQty}: $` + eggsTotal)
console.log("-----------------")

const subtotal = riceTotal + beansTotal + eggsTotal
let discount = 0
if (subtotal > 20) {
  console.log("You qualify for Discount that is 5% off")
  discount = subtotal * 0.05
}
const tax = subtotal * 0.13

const total = subtotal + tax - discount
console.log("-----------------")

console.log("Subtotal: $" + subtotal)
console.log("Tax: $" + tax)
if (discount > 0) {
  console.log("Discount: $" + discount)
}
console.log("-----------------")

console.log("Total: $" + total)
console.log("-----------------")
