const Notes_Container = document.querySelector(".notes-container");
const Create_Btn = document.querySelector(".btn");
let Notes = document.querySelectorAll(".input-box");

function showNotes(){
    Notes_Container.innerHTML = localStorage.getItem("notes");
}

function updateStorage(){
    localStorage.setItem("notes", Notes_Container.innerHTML);
}

Create_Btn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    Notes_Container.appendChild(inputBox).appendChild(img);
})

Notes_Container.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})