const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let n = arr1.length;
let mf = 1;
let m = 0;
let item;
for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) m++;
    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }
  m = 0;
}
function leastFrequent(arr1, n) {
  arr1.sort();
  let min_count = n + 1,
    res = -1;
  let curr_count = 1;
  for (let i = 1; i < n; i++) {
    if (arr1[i] == arr1[i - 1]) curr_count++;
    else {
      if (curr_count < min_count) {
        min_count = curr_count;
        res = arr1[i - 1];
      }
      curr_count = 1;
    }
  }
  if (curr_count < min_count) {
    min_count = curr_count;
    res = arr1[n - 1];
  }
  return res;
}
const mfn = [item];
document.write([mfn, leastFrequent(arr1, n)]);
