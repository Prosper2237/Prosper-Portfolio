const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText ==="") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const deletBtn = document.createElement("button");
    deletBtn.textContent = "❌";
    deletBtn.style.marginLeft = "10px";
    deletBtn.addEventListener("click", () => li.remove()); 

    li.appendChild(deletBtn);
    taskList.appendChild(li);
    taskInput.value = "";
});