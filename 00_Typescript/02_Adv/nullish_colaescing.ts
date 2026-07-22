export {}; // to make this file a module
// you can comment the export statement while running the script
// This export is used in order to make this file a module.
//  If you don't use this export statement, then the variables and functions defined in this file will be 
// in the global scope and can be accessed from other files. This can lead to naming conflicts and other issues. By using the export statement, we can ensure that the 
// variables and functions defined in this file are only accessible within this file and not in the global scope.

//Nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
let name = undefined;
 
console.log(name ?? "Guest");
 
 
// ----------------------------------
 
let employee = {
    name: "Virat"
};
 
console.log(employee.salary ?? 0);
 
// ---------------------------------
 
let salary = 0;
 
console.log(salary ?? 5000); // 0
