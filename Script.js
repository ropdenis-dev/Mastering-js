// ===============================
// Part 1: Variables & Conditionals
// ===============================
let userName = prompt("Enter your name:"); // capture user input
if (userName) {
  console.log(`Hello, ${userName}!`);
} else {
  console.log("Hello, Guest!");
}

// ===============================
// Part 2: Functions (Reusability)
// ===============================

// Function 1: Display a greeting in the DOM
function displayGreeting(name) {
  const greeting = name ? `Hello, ${name}!` : "Hello, Guest!";
  document.getElementById("greeting").textContent = greeting;
}

// Function 2: Create a list of numbers up to a given limit
function generateNumberList(limit) {
  const list = [];
  for (let i = 1; i <= limit; i++) {
    list.push(i);
  }
  return list;
}

// ===============================
// Part 3: Loops
// ===============================

// Loop Example 1: Use a for loop inside generateNumberList()
// (already implemented above)

// Loop Example 2: Countdown in console
let countdown = 5;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

// ===============================
// Part 4: DOM Interactions
// ===============================

// DOM Interaction 1: Greet Button Click
document.getElementById("greetBtn").addEventListener("click", function () {
  displayGreeting(userName);
});

// DOM Interaction 2: Generate Number List
document.getElementById("generateBtn").addEventListener("click", function () {
  const numbers = generateNumberList(10);
  const listElement = document.getElementById("numberList");
  listElement.innerHTML = ""; // clear previous
  numbers.forEach(num => {
    const li = document.createElement("li");
    li.textContent = num;
    listElement.appendChild(li);
  });
});

// DOM Interaction 3: Toggle Dark Mode
document.getElementById("themeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
