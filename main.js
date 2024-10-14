const input = document.getElementById("inp");
const btn = document.getElementById("btn");
const result = document.querySelector(".result");
btn.addEventListener("click",addTasks);

function addLocalstorage() {
    localStorage.setItem("tasks",result.innerHTML);
}

if(localStorage.getItem("tasks")) {
    result.innerHTML = localStorage.getItem("tasks");
}

function addTasks() {
if(input.value != "") {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let img = document.createElement("img");
    let span = document.createElement("span");
    span.innerHTML = "X"
    let text = document.createTextNode(input.value);
    span.id = "delete";
    img.src = "./images/unchecked.png";
    // append 
    div.append(img);
    p.append(text);
    div.append(p);
    div.append(span);
    result.append(div); 
    input.value = "";
    addLocalstorage();
}

}

result.addEventListener("click", (e) => {
    if (e.target.tagName == "P" ) {
        e.target.classList.toggle("done");
        if( e.target.classList.contains("done")) {
            e.target.previousElementSibling.src = "./images/checked.png";
        }else {
            e.target.previousElementSibling.src = "./images/unchecked.png";
        }
    }
    if(e.target.tagName == "SPAN") {
        e.target.parentElement.remove()
        addLocalstorage()
    }
    if (e.target.tagName == "IMG") {
        e.target.nextElementSibling.classList.toggle("done");
        if (e.target.nextElementSibling.classList.contains("done")) {
            e.target.src = "./images/checked.png";
            console.log(true)
        }else {
            e.target.src = "./images/unchecked.png";
        }
    }
})

