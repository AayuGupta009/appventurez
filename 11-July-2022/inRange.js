var start = 0;
var end = 5;
// Find sum of Natural Numbers in range 0-5
var sum = (5 * (5 + 1)) / 2;
console.log(sum);

var arr = [4, 3, 1, 0, 5];
let i;
// Find sum of values in Array
var arrSum = 0;
for (i in arr) {
  arrSum += arr[i];
}
// Find the missing value
console.log("Missing value is : " + (sum - arrSum));
