// element selectors = methods used to target and manipulate HTML elements they allow you to select one or multiple 
//                      HTML elements from the DOM (document object model)

// 1. document.getelementbyid() // element or null
// 2. document.getelementbyclassname()  // HTML collection
// 3. document.getelementbytagname()  //HTML collection
// 4. document.queryselector()   // element or null
// 5. document.queryselectorAll() // Nodelist

const bad = document.getElementById("heads");
bad.style.backgroundColor = "cyan";
bad.style.textAlign = "center";
bad.style.color = "grey";

const sitcom = document.getElementsByClassName("sitcomm");

for (let sitcoms of sitcom){
    sitcoms.style.backgroundColor = "blue";   
}

const h3ele = document.getElementsByTagName("h3");
h3ele[0].style.backgroundColor = "blue";
h3ele[1].style.backgroundColor = "burgundy";

const lieles = document.getElementsByTagName("li");

for (let liele of  lieles){
    lieles.style.backgroundColor = "grey";
}
 
const ele = document.querySelector("h3");     // SELECTS FIRST CLASS name or tag name
ele.style.backgroundColor = "blue";

const ele2 = document.querySelectorAll("li");
ele2[0].style.color = "green";
console.log(head);
