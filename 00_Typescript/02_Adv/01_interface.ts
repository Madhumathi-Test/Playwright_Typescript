interface Employee
{
 id: number;
 name: string;
 salary: number;
}
 
let emp1: Employee = {
    id: 1,
    name: "Mathi",
    salary: 50000
};
 
let emp2: Employee = {
    id: 2,
    name: "Madhu",
    salary: 60000
};
 
console.log(emp1);
console.log(emp2);
 
console.log(emp1.id);
console.log(emp2.id);
console.log(emp1.name);
console.log(emp2.name);
console.log(emp1.salary);
console.log(emp2.salary);