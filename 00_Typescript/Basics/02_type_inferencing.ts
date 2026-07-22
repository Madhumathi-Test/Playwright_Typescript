// TS  (Type Inference)
 
// if TS can automatically determine the datatype, explicit datatype declaration is not required.
 
let player = "Virat";
 
player = "Rohit"; // valid
// player = 100; // compilation error
 
// ---------------------------------
// let city = "Pune";
 
// Internally
// let city:string
 
 
// Recommended:
// let city = "Pune";
 
// Avoid:
// let city:string = "Pune";