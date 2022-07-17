// const { arrayBuffer } = require('stream/consumers');

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

let todos = [];

function saveTodos () {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo (event) {
    const li = event.target.parentElement;
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    li.remove();
    saveTodos();
}

function paintTodo (newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerHTML = "❌";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText= newTodo.text;
    todoList.appendChild(li);
}

function handleTodoSubmit (event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = ""; 
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);



const savedTodos = localStorage.getItem("todos");

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}

