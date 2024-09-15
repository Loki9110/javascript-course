// string slicing = creating a substring from a portion of another string    
//  string.slice(start,end)

const s = "lokesh bro";
let mail = "lol@123";
let c = s.slice(1:3);
let n = s.slice(-1);
let f = s.slice(0,s.indexOf(" "));
let m = mail.slice(0,mail.indexOf("@"));
console.log(c); // Output: "ok"
console.log(n); // Output: "h"
console.log(f); // Output: "lokesh"
console.log(m); // Output: "lol"