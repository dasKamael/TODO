let input = document.querySelector("#input");
let add = document.querySelector("#add");
let list = document.querySelector(".todos");


add.addEventListener("click", createTodo);
list.addEventListener("click", removeTodo);
//input.addEventListener("keyup", searchTodo);


function createTodo() {
  let todoValue = input.value;
  
  let nextTodo = document.createElement("div");
      nextTodo.classList.add("todo");
      
  let todo = document.createElement("h2");
      todo.textContent = todoValue;
  
  let trash = document.createElement("i");
      trash.classList.add("trash");
      trash.classList.add("fas");
      trash.classList.add("fa-trash-alt");
      
  nextTodo.appendChild(todo);
  nextTodo.appendChild(trash);
  list.appendChild(nextTodo);

  console.log(list)
}

function removeTodo(e) {
  e.preventDefault();
    if(e.target.classList.contains('trash')){
        e.target.parentElement.remove();
    }
}

// TODO Search function
// function searchTodo(e) {
//   var text = e.target.value.toLowerCase();

//   var items = document.getElementsByTagName('todo');
//     //Convert To an Array
//     Array.from(items).forEach(function(item) {
//         var itemName = item.firstChild.textContent;
//         if(itemName.toLowerCase().indexOf(text) != -1) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     })
// }
