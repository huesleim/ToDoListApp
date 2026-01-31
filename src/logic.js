const todoList = [];
const todoDisplay = document.getElementById("todoList");


export const newTodo = (name, dueDate, description) => {
    return {
        id: crypto.randomUUID(),
        name: name,
        dueDate: dueDate,
        description: description,
        completed: false,
    };
};

export const addTodo = (name, dueDate, description) => {
    const todo = newTodo(name, dueDate, description);
    let index = sortList(todo);
    todoList.splice(index, 0, todo);
};

const sortList = (todo) => {
    let index = 0;
    const todoDateValue = todo.dueDate?.replaceAll("-", "");

    if (todoList.length === 0 || !todoDateValue) {
        return index;
    }

    for (const item of todoList) {
        const dateValue = item.dueDate?.replaceAll("-", "");
        if (!dateValue){
        index += 1;
        continue;
        }
        if (todoDateValue <= dateValue) {
            return index;
        } else {
            index +=1;
        }
    }
    return index;
};

export const renderList = () => {
    todoDisplay.innerHTML = "";
    for (const todo of todoList) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todoItem");

        let todoName = document.createElement("h3");
        todoName.textContent = todo.name;
        todoDiv.appendChild(todoName);
        if (todo.dueDate) {
            let dueDate = document.createElement("p");
            dueDate.textContent = `Due: ${todo.dueDate}`;
            todoDiv.appendChild(dueDate);
        }
        if (todo.description) {
            let description = document.createElement("p");
            description.textContent = todo.description;
            todoDiv.appendChild(description);
        }
        todoDisplay.appendChild(todoDiv);

        const todoButtons = document.createElement("div");
        todoButtons.classList.add("todoButtons");
        todoDiv.appendChild(todoButtons);

        const labelDone = document.createElement("label");
        labelDone.textContent = "Done";
        todoButtons.appendChild(labelDone);

        const checkDone = document.createElement("input");
        checkDone.type = "checkbox";
        checkDone.checked = todo.completed;
        todoButtons.appendChild(checkDone);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        todoButtons.appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
            todoList.splice(todoList.indexOf(todo), 1);
            renderList();
        });

        checkDone.addEventListener("change", () => {
            todo.completed = checkDone.checked;
            todoDiv.classList.toggle("completed", todo.completed);
        });
    }
};

export const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todoList));
};

export const loadTodos = () => {
    const stored = localStorage.getItem("todos");
    const parsed = stored ? JSON.parse(stored) : [];
    todoList.length = 0;
    todoList.push(... parsed);
    renderList();
};