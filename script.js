let input = document.querySelector("#input");
let add = document.querySelector("#add");
let list = document.querySelector(".todos");


add.addEventListener("click", createTodo);
list.addEventListener("click", removeTodo);

function createTodo() {
  let todoValue = input.value;
    // Check if input Field is Empty
    if(todoValue.length < 1){
        alert("Please Enter a Todo in the Field");
    } else {
    // Create necessary Elements
    let nextTodo = document.createElement("div");
    nextTodo.classList.add("todo");
    
    let todo = document.createElement("h2");
    todo.textContent = todoValue;

    let trash = document.createElement("i");
    trash.classList.add("trash");
    trash.classList.add("fas");
    trash.classList.add("fa-trash-alt");
    
    // Appending created Elements to the List 
    nextTodo.appendChild(todo);
    nextTodo.appendChild(trash);
    list.appendChild(nextTodo);
  }
  
  

}

function removeTodo(e) {
  e.preventDefault();
    if(e.target.classList.contains('trash')){
        e.target.parentElement.remove();
    }
}