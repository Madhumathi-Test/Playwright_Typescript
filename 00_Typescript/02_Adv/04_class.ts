class Employee
{
    public empName: string;
    private sal: number;
    protected department: string;
 
    constructor(name: string, salary: number, department: string)
    {
        this.empName = name;
        this.sal = salary;
        this.department = department;
    }
 
    display()
    {
        console.log("Employee Name: " + this.empName);
    }
 
    class Manager extends Employee
{
    constructor(name: string, salary: number, department: string)
    {
        super(name, salary, department);
    }
 
    display()
    {
        console.log("Manager Name: " + this.empName + ", Department: " + this.department);
        // console.log("Salary: " + this.sal); // compilation error - private member
    }
}
 
let mgr1 = new Manager("Jane", 60000, "HR");
console.log(mgr1.empName);
mgr1.display();
}
 
let emp3 = new Employee("John", 50000, "IT");
console.log(emp3.empName);
emp3.display();
 
console.log(emp3.sal); // compilation error - private member
console.log(emp3.department); // compilation error - protected member