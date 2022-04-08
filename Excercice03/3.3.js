let arr = [2,4,6,8,10];
let arrcopy= arr;
console.log(arr);
console.log(arrcopy);

arr.push(300)
console.log(arr);
console.log(arrcopy);

console.log("----------------------------------------");
//second test

let array = [10,20,30,40];
let arraycopy=[...array];
console.log(array);
console.log(arraycopy);

array.push(50);
console.log(array);
console.log(arraycopy);