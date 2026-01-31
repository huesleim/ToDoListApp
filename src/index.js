import * as logic from "./logic.js";
import "./styles.css";

const newTodo = document.getElementById('newTodo');
const modal = document.querySelector('.modal');
const form = document.getElementById('todo-form');
const cancel = document.getElementById('cancelTodo');
const save = document.getElementById('save');
const load = document.getElementById('load' );

newTodo.addEventListener('click', () => {
    modal.classList.add('active');
}); 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements.name.value.trim();
    const dueDate = form.elements.due.value
    const description = form.elements.description.value.trim();
    logic.addTodo(name, dueDate, description);
    modal.classList.remove("active");
    logic.renderList();
    form.reset();
});

cancel.addEventListener("click", () => {
    modal.classList.remove("active");
    form.reset();
});

save.addEventListener("click", logic.saveTodos);

load.addEventListener("click", logic.loadTodos);