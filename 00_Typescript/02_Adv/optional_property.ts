//optional property in interface
// export {}; // to make this file a module
 
interface Employee {
    id: number;
    name: string;
    salary?: number;  // salary is optional property here
}
 
// Valid
let emp1: Employee = {
    id: 101,
    name: "Virat"
};
 
 
// Valid
let emp2: Employee = {
    id: 102,
    name: "Rohit",
    salary: 90000
};
 
console.log(emp1);
console.log(emp2);