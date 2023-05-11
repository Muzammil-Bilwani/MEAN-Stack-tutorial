function reversestring(str) {
  let splitstr=str.split("")
  let revstr=splitstr.reverse()
  let joinstr=revstr.join("")
  return joinstr
}
console.log(reversestring("hello"))

function countstr(arr) {
  let newarr=[]
  for(let i=0;i<arr.length;i++) {
    const l=arr[i].length
    newarr.push(l)
  }
  return newarr
}
console.log(countstr(["hi","hey","hello"]))

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("racer"));
console.log(isPalindrome("racecar"));

function evno(arrs) {
  let ev=arrs.filter(number => number % 2 == 0)
  return ev
}
console.log(evno([0,1,2,3,4,5,6,7,8]))

function sumLargest(arr) {
  arr.sort((a, b) => b - a);
  return arr[0] + arr[1];
}
console.log(sumLargest([1, 2, 3, 4]));
console.log(sumLargest([10, 30, 20, 5]));

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


