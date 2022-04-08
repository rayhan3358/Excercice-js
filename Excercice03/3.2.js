let arr = [1, 2, 3, 4, 5];
let arr2 = [100, 101, 102];
let sum = 0;

for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

for (let i = 1; i < arr2.length; i++) {
    sum += arr2[i];
}
console.log(sum);