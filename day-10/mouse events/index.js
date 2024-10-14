// eventlistener =  listen for specefic events to create interactive web pages events: click, mouseover,mouseout
//              .addeventlistener(event,callback);


const mybox = document.getElementById("mybox");

function changecolor(event){
    event.target.style.backgroundcolor = "red";
    event.target.textcontent = "ouch";
}
mybox.addEventListener("click",changecolor);


function changecolr(event){
    event.target.style.backgroundcolor = "green";
    event.target.textcontent = "bruh!";
}

mybox.addEventListener("mouseover",changecolr);



function changecol(event){
    event.target.style.backgroundcolor = "yellow";
    event.target.textcontent = "hell nah!";
}
mybox.addEventListener("mouseout",changecol);
