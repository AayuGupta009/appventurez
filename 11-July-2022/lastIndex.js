var arr = [
  [1, 2],
  [4, 5],
  [3, 4],
];
var search = [3, 4];
// Traverse the Array
for (let i = 0; i < arr.length; i++) {
  if (JSON.stringify(arr[i]) == JSON.stringify(search)) return console.log(i);
  // Use JSON Stringify to Change Array into a JS String
}

return console.log("Not Found!!!");
