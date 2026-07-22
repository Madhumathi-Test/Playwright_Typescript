type BrowserName = "chromium" | "firefox" | "webkit";
 
let browser: BrowserName = "chromium";
 
console.log(browser);
 
browser = "firefox"; // valid
console.log(browser);
 
// browser = "safari"; // compilation error