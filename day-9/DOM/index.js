// DOM = DOCUMENT OBJECT MODEL
// object{} that represents page you see in the web browser and provides with an API to interact with it
//  web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree like representation.
//  javascript can acces om to dynamically change the content ,structure and style of a web page.

 document.title = "thats cool";
 document.body.style.backgroundColor = "hsl(0,0%,15%)";

const usr = "loki";
const msg = document.getElementById("msg");
msg.textContent += usr === "" ? `Guest` : usr;

 console.dir(document);