//method chaining = calling one method in on continous line of code



// ----------- no method chaining --------------
let user = window.prompt("enter your username");
user = user.trim();
let l = user.charAt(0);
l = l.toUpperCase();
let extra = user.slice(1);
extra = extra.toLowerCase();
user = l + extra;
console.log(user);

/// ---------- method chaining ----- 

user = user.trim().charAt(0).toUpperCase() + user.trim().slice(1).toLocaleLowerCase();
console.log(user);
