let tasks = [];

const inputTask = document.getElementById("inputTask");
const taskList = document.getElementById("taskList");

inputTask.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

function renderTodo() {
  // erase all rendered tasks first otherwise the old tasks will appear along with updated ones
  taskList.innerHTML = null;

  // loop thru and render each task
  for (let i = 0; i < tasks.length; i++) {
    /*
      Make something like this ↓
      --------------------------
      <div class="taskContainer">
        <p>Feed the cats</p>
        <button onclick="deleteTodo(0)">delete</button>
      </div>
    */
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");

    const task = document.createElement("p");
    task.textContent = tasks[i];

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTodo(i); // we don't wanna run the function, hence function wrapping

    taskContainer.append(task, deleteBtn);
    taskList.appendChild(taskContainer);
  }
}

// call this function whenever the tasks array is updated
function saveTodo() {
  localStorage.setItem("key", JSON.stringify(tasks));
}

// when the app is loaded, this function gets called
function loadTodo() {
  if (localStorage.getItem("key")) {
    tasks = JSON.parse(localStorage.getItem("key"));
  }
  renderTodo();
}

function addTodo() {
  const task = inputTask.value;
  if (!task) return; // if input empty, do nothing
  tasks.push(task);
  renderTodo();
  inputTask.value = ""; // clear input
  saveTodo();
}

function deleteTodo(i) {
  tasks.splice(i, 1); // delete element of index i from tasks
  renderTodo();
  saveTodo();
}

// load save after refresh
document.addEventListener("DOMContentLoaded", loadTodo);
