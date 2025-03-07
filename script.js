document.addEventListener("DOMContentLoaded", () => {
    let todoInput = document.getElementById("todo-input");
    let todobutton = document.getElementById("add-task-btn");
    let todolist = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task=> {
        renderTask(task);
    });

    todobutton.addEventListener("click", () => {
        let tasktext = todoInput.value.trim();
        if (tasktext === "") 
            return;
        const newtask = {
            id: Date.now(),
            text: tasktext,
            completed: false
        };
        tasks.push(newtask);
        saveTasks();
        todoInput.value = ""; // clear the input
        console.log(tasks);
        renderTask(newtask);
    });

    function renderTask(task) {
        let li = document.createElement("li");
        li.setAttribute("data-key", task.id);
        if(task.completed) li.classList.add("completed");    
        li.innerHTML = `
            <span>${task.text}</span>
            <button class="delete-btn">Delete</button>`;
        li.addEventListener("click", (e) => {
            if(e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed;
            li.classList.toggle("completed");
            saveTasks();
        });
        li.querySelector(".delete-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            li.remove();
        });
        todolist.appendChild(li);
    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});