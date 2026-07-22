// any vs unknown
 
// // If datatype is not mentioned, by default it will use any.
 
// let data1; // any
// let data1:any; // any
 
// data1 = 10; // valid
// data1 = "Hello"; // valid
// // data1 = true; // valid
 
// console.log(data1);
// console.log(data1.toUpperCase()); // valid, but can cause runtime error if data1 is not a string
 
// -----------------------------------
 
// unknown - safer option
let data2: unknown;
 
data2 = 10; // valid
data2 = "Hello"; // valid
data2 = true; // valid
 
console.log(data2);
// console.log(data2.toUpperCase()); // compilation error - need to type guard
 
if (typeof data2 === "string") {
    console.log(data2.toUpperCase());
}