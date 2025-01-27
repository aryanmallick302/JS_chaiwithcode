const div = document.createElement("div");
div.style.backgroundColor = "orange";
div.style.color = "black";
div.style.padding = "12px"
div.className = "main";
div.id = "myId";
// div.setAttribute("class" , "main");   should avoid this technique for assiging class and id 
// div.setAttribute("id" , "myId");
console.log(div);
const addText = document.createTextNode("chai aur code");
div.appendChild(addText);
document.body.appendChild(div);

function createDiv( d){

}