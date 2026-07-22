// let browser = "chromium";

// enum Browser{
//     "chromium" = "chromium",
//     "firefox" = "firefox",
//     "webkit" = "webkit"
// }

// let browser = Browser.chromium; //valid
// console.log(browser1); // Output: chromium

// Pros os using enum
// 1. Enums provide a way to define a set of named constants, which can make code more readable and maintainable.
// 2. Enums can be used to represent a fixed set of values, which can help prevent errors and improve type safety.
// 3. Enums can be used in switch statements, which can make code more concise and easier to read.
// 4. Familiar to developers coming from other languages that support enums, such as C# or Java.
// 5. Built-in feature

// cons of using enum
// 1. Enums can add complexity to code, especially if they are used excessively or inappropriately.
// 2. Enums can be less flexible than other data structures, such as objects or arrays, which can limit their usefulness in certain situations.

//================================================

//You may use const as well

const BrowserType = {
    "chromium": "chromium",
    "firefox": "firefox",
    "webkit": "webkit"
} as const; // as const is used to make the object readonly

let browser2 = BrowserType.chromium; //valid

console.log(BrowserType.chromium); // Output: chromium

// BrowserType = {}; // compilation error, because BrowserType is readonly
// BrowserType.chromium = "firefox_new"; // compilation error, because BrowserType is readonly
