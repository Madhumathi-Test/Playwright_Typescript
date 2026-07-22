export {}; // to make this file a module
 
export interface Employee {
    id: number;
    name: string;
    manager?: {
        name: string;
    };
}
 
let emp: Employee = {
    id: 101,
    name: "Virat",
    // manager: {
    //     name: "Rohit"
    // }
};
 
// let emp: Employee = {
//     id: 101,
//     name: "Virat"
// };
 
//  console.log(emp.manager.name);
 
if(emp && emp.manager)
{
    console.log(emp.manager.name);
}
 
console.log(emp?.manager?.name); //optional chaining operator ?. is used to access the property of an object that may be null or undefined. If the object is null or undefined, it will return undefined instead of throwing an error.