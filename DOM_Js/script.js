let button = document.getElementById("button");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let task = document.querySelectorAll("li");

function inputLength () {
    return input.value.length;
}

function createElement () {
    let div = document.createElement("div");
    let deleteBtn = document.createElement("button");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.classList.add("task");
    deleteBtn.classList.add("deleteBtn");
    ul.appendChild(div);
    div.append(li, deleteBtn);
    deleteBtn.innerHTML = "delete";
    // ul.appendChild(li);
    input.value = "";
}

function addItemAfterClick(){
        if (inputLength() > 3){
            createElement();
        } else {
            window.alert("Enter Something !!!");
        }
}
function addItemAfterPress(event){
    if(inputLength() > 3 && event.keyCode === 13){
        createElement();
    }
}
function doneTask(taskDone){
    if(taskDone.target.tagName === "LI"){
        taskDone.target.classList.toggle('done');
    }
}
function deleteTask(element){
    if (element.target.className === "deleteBtn"){
        element.target.parentElement.remove();
    }
}
function handleUl(element){
    doneTask(element);
    deleteTask(element);
}
// for(let i = 0; i < task.length; i++){
//     task[i].addEventListener("click", function(){
//         task[i].classList.toggle('done');
//     })
// }

button.addEventListener("click", addItemAfterClick);
input.addEventListener("keypress", addItemAfterPress);
ul.addEventListener("click", handleUl);

