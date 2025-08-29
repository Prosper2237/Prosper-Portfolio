// Greeting
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
if (hour < 12) {
    greeting.textContent = "Good Morning, welcome to my portfolio!";
} else  if (hour < 18) {
    greeting.textContent = "Good Afternoon, enjoy exploring!";
} else {
    greeting.textContent = "Good Evening, thanks for visiting!";
}

// Contact form
document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you! Your message has been received.");
});

// To-do list
function addTask() {
    const input = document.getElementById("todo-input");
    const task = input.value.trim();
    if (task) {
        const li = document.createElement("li");
        li.textContent = task

        // Mark as done
        li.onclick = () => li.classList.toStringggle("completed");

        // delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "❌";
        delBtn.style.marginLeft = "10px";
        delBtn.onclick = () => li.remove();

        li.appendChild(delBtn);
        document.getElementById("todo-list").appendChild(li);
        input.value = "";

    }
}
// const addBtn = document.getElementById("add-task");

// const list = document.getElementById("todo-list");

// addBtn.addEventListener("click", () => {
//     if (input.value.trim() !== "") {
//         const li = document.createElement("li");
//         li.textContent = input.value;

//         // click to strike through
//         li.addEventListener("click", () =>{
//             li.style.textDecoration = 
//                 li.style.textDecoration === "line-through" ? "none" : "line-through";
//         });
//         list.appendChild(li);
//         input.value = "";
//     }
// });

// Calculator
let calcInput = "";
function press(value) {
    calcInput += value;
    document.getElementById("calc-display").value = calcInput;
}
function calculate() {
    try {
        document.getElementById("calc-display").value = eval(calcInput);
        calcInput = "";
    } catch {
        document.getElementById("calc-display").value = "Error";
    }
}
function clearCalc() {
    calcInput = "";
    document.getElementById("calc-display").value = eval(calcInput);
}

// const calacBtn = document.getElementById("calc-btn");
// calacBtn.addEventListener("click", () => {
//     const num1 = Number(document.getElementById("num1").value);
//     const num2 = Number(document.getElementById("num2").value);
//     const sum = num1 + num2;
//     document.getElementById("calc-result").textContent = `Result: ${sum}`;
// });

// Random Quote Generator
const quotes = [
    "The best way to get started is to quit talking and beging doing.",
    "Success is not key to happiness. Happiness is key to success.",
    "It's not weather you get knocked down, it's weather you get up.",
    "Dream big and dare to fail.",
    "Believe in yourswelf!",
    "Code, coffe, repeat.",
    "Stay curious, stay learning.",
    "Mistakes are proof you are trying.",
    "Every expert was once a beginner."
];
function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-display").textContent = quotes[randomIndex];
}
// const quotes = [
//     "Believe in yourswelf!",
//     "Code, coffe, repeat.",
//     "Stay curious, stay learning.",
//     "Mistakes are proof you are trying.",
//     "Every expert was once a beginner."
// ];
// document.getElementById("quote-btn").addEventListener("click", () => {
//     const random = quotes[Math.floor(Math.random() * quotes.length)];
//     document.getElementById("quote-display").textContent = random;
// });
