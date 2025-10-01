const taskInput = document.getElementById('taskInput');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTask.addEventListener('click', () => {
    const t = taskInput.value.trim();
    if(!t) return; 
    const li = document.createElement('li');
    li.innerHTML = `<span>${t}</span><div><button class="done">✓</button> <button class="del">x</button></div>`;
    taskList.appendChild(li);
    taskInput.value = '';
});
taskList.addEventListener('click', (e) => {
    if(e.target.classList.contains('del')) e.target.closest('li').remove();
    if(e.target.classList.contains('done')) e.target.closest('li').classList.toggle('completed');
});