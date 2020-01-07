// Define UI vars
const form = document.querySelector("#task-form");
const filterTask = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const taskInput = document.querySelector("#task");

// Load all event listerners
loadEventListeners();

// Load all event listerners
function loadEventListeners() {
  // add task event
  form.addEventListener("submit", addTask);
}

// Add task
function addTask(e) {
  if (taskInput.value === "") {
    console.log("aaa");
  }

  // Create li element
  const li = document.createElement("li");
  // add a class
  li.classNane = "collection-item";
  // Create next text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement("a");
  // Add class
  link.className = "delete-item secondary-content";
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append the link to li
  li.appendChild(link);
  // append li to ul
  taskList.appendChild(li);
  // clear input
  taskInput.value = "";

  e.preventDefault();
}
