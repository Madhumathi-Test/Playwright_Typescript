let players:string[] =
[
    "Virat",
    "Rohit",
    "Gill"
];
 
console.log(players);
console.log(players[0]);
 
players[0] = "Dhoni"; // valid
console.log(players[0]);
 
// players[0] = 100; // compilation error
 
// loop through the array
for (const player of players) {
    console.log(player);
}
 
console.log("Thanks")
 
// ------------------------------------------
 
// Type Inference string[]
let playersOld =  
[
    "Sachin",
    "Kapil",
    "Sunil",
    40
];
 
console.log(playersOld);
console.log(typeof playersOld[0]); // string
console.log(typeof playersOld[3]); // number
 
playersOld[3] = 50; // valid
console.log(playersOld[3]); // 50
 
playersOld[3] = "Rahul"; // valid
console.log(playersOld[3]); // Rahul