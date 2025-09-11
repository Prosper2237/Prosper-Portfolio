const quotes = [
  "Believe in yourself.",
  "Stay positive, work hard, make it happen.",
  "Every day is a new beginning.",
  "Push yourself, because no one else is going to do it for you.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts."
];

document.getElementById("newQuote").addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[random];
});