function loadTodos(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res=>res.json())
    .then(data => displayTodos(data))
}

function displayTodos(todos){
    const todoContainer = document.getElementById("todo-container");
    for (const todo of todos){
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo")
        todoDiv.innerHTML = `
        <h4>ID: ${todo.id}</h4>
        <h3>title: ${todo.title}</h3>
        <h4>Task Completion: ${todo.completed===true? "completed": "not completed"}</h4>
        `
        todoContainer.appendChild(todoDiv);
    }

}


loadTodos();