function sumLargest(arr) {
  arr.sort((a, b) => b - a);
  return arr[0] + arr[1];
}
console.log(sumLargest([1, 2, 3, 4]));
console.log(sumLargest([10, 30, 20, 5]));

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("racer"));
console.log(isPalindrome("racecar"));

function firstGreater(arr) {
  for(let i=0;i<arr.length;i++) {
    if(arr[i]>=10) {
      return i;
    }
  }
  return -1;
}
console.log(firstGreater([1,5,15,20]));
console.log(firstGreater([9,10,11,12,13,14]));

function pluck(arr, key) {
  return arr.map(obj => obj[key]);
}
const people = [{name: "John", age: 30}, {name: "Jane", age: 25}];
const names = pluck(people, "name");
console.log(names)


