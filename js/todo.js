const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleToDo(event) {
    const li = (event.target.parentElement);
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li"); // html요소를 생성해서
    const span = document.createElement("span");
    span.innerText = newTodo;  // 지정하고
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li); // 원래 요소에 넣어줍니다.
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}


toDoForm.addEventListener("submit", handleToDoSubmit);

