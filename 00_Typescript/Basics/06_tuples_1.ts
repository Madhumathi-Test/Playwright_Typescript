// Tuples
// 1. Number of elements in the tuple is fixed
// 2. Each element in the tuple can be of a different type
// 3. The order of the elements in the tuple is important

let playerRec: [string, number];
 
playerRec = ["Virat", 18];
    // index 0, we have string
    // index 1, we have number    
 
console.log(playerRec);
console.log(playerRec[0]); // Virat
console.log(playerRec[1]); // 18
 
playerRec[0] = "Rohit"; // valid
// playerRec[0] = 100; // compilation error
 
// ------------------------------------
 
// let playerRecs: [string, number];
 
// playerRecs = ["Virat", 18, "Sachin", 10, "Rohit", 45]; // compilation error
 
// ------------------------------------

// Another way to declare
let playerRecord: [string, number] = ["Virat", 18];
console.log(playerRecord);
 
// ------------------------------------
 
let employee: [number, string, boolean];
 
employee = [
    101,
    "Dhoni",
    true
];
 
console.log(employee);
 
// ------------------------------------

// Array of Tuples
let playerRecords: [string, number][];
playerRecords = [
    ["Virat", 18],
    ["Rohit", 45],
    ["Gill", 99]
];
console.log(playerRecords);
console.log(playerRecords[0]); // ["Virat", 18]
console.log(playerRecords[0][0]); // Virat
console.log(playerRecords[0][1]); // 18
 
// ----