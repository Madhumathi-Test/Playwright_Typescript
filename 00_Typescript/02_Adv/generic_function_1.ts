console.log("Generic function - can accept any datatype");
// Generic function - can accept any datatype
function printValue<T>(value: T): void {
    console.log(value);
}
 
printValue("Hello, World!"); // valid
printValue(100); // valid
 
 
// function getValue(value: any): any {
//     return value;
// }
 
// let name2 = getValue("Virat");
// let age2 = getValue(35);
 
// console.log(name2); // Virat
// console.log(age2); // 35