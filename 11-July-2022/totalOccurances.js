var arr = ["a", "b", "c", "a", "b", "b"];
var len = arr.length;
var temp;
// Change to SET to reduce to u unique values
var res = new Set(arr);
// Reduce set to JS Object
var count = Array.from(res).reduce((a, c) => {
  a[c] = "";
  return a;
}, {});

for (let i = 0; i < len; i++) {
  // Check for current value
  temp = arr[i];
  //   If found add to it's index
  if (count[temp]) {
    count[temp] += 1;
  }
  // If not found , then we keep the OG value
  else {
    count[temp] = 1;
  }
}
console.log(count);
