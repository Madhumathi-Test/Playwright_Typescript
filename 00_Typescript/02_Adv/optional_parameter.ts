function greet(name?: string): void {
    console.log(`Hello ${name}`);
}
 
greet("Virat");
greet();

// /====================
function greetAgain(name?: string): void {
    console.log(`Hello ${name ?? "Guest"}`);
}
 
greetAgain("Rohit");
greetAgain();