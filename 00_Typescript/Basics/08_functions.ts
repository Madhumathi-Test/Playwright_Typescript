function add(a: number, b: number): number {
    return a + b;
}
 
console.log(add(5, 10)); // valid
console.log(add(5, "10")); // compilation error
 
// -----------------------------
// Type Inference does not work with function parameters, so we need to explicitly declare the datatype of the parameters.
// function addNum(a, b){
//     return a + b;
// }
 
// console.log(addNum(5, 10)); // valid
// console.log(addNum(5, "10")); // valid, but not recommended