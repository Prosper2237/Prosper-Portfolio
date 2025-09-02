function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const deletBtn = document.createElement("button");
    deletBtn.textContent = "Delete";
    deletBtn.onclick = () => li.remove();

    li.appendChild(deletBtn);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}