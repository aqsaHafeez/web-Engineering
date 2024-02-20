function applyFunction(arr, func) {
    return arr.map(func);
}
let num = [1, 2, 3];
let res = applyFunction(num, (x) => x * 2);
console.log(res);
