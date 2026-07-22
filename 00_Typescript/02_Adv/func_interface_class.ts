// Interface
interface Employee {
    id: number;
    name: string;
    salary: number;
}

// Class
class EmployeeManagement {
    private employees: Employee[] = [];

    // Add Employee
    addEmployee(emp: Employee): void {
        this.employees.push(emp);
        console.log("Employee added successfully.");
    }

    // Display Employees
    displayEmployees(): void {
        console.log("\nEmployee List:");
        this.employees.forEach(emp => {
            console.log(
                `ID: ${emp.id}, Name: ${emp.name}, Salary: ${emp.salary}`
            );
        });
    }

    // Delete Employee
    deleteEmployee(id: number): void {
        this.employees = this.employees.filter(emp => emp.id !== id);
        console.log(`Employee with ID ${id} deleted.`);
    }

    // Update Employee
    updateEmployee(id: number, newSalary: number): void {
        const emp = this.employees.find(emp => emp.id === id);

        if (emp) {
            emp.salary = newSalary;
            console.log("Employee salary updated.");
        } else {
            console.log("Employee not found.");
        }
    }

    // Find Highest Salary
    findHighestSalary(): void {
        if (this.employees.length === 0) {
            console.log("No employees found.");
            return;
        }

        let highest = this.employees[0]; //assuming the first employee has the highest salary

        // iterate through the employees
        for (let emp of this.employees) { 
            if (emp.salary > highest.salary) {
                highest = emp;
            }
        }

        console.log("\nHighest Salary Employee:");
        console.log(
            `ID: ${highest.id}, Name: ${highest.name}, Salary: ${highest.salary}`
        );
    }
}

// Create Object
const empManager = new EmployeeManagement();

// Add Employees
empManager.addEmployee({ id: 1, name: "Madhu", salary: 50000 });
empManager.addEmployee({ id: 2, name: "Kishan", salary: 75000 });
empManager.addEmployee({ id: 3, name: "Dev", salary: 65000 });

// Display Employees
empManager.displayEmployees();

// Update Salary
empManager.updateEmployee(1, 80000);

// Delete Employee
empManager.deleteEmployee(3);

// Display Again
empManager.displayEmployees();

// Find Highest Salary
empManager.findHighestSalary();