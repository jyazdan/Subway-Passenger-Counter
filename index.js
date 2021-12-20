let count = 0; // Initialize the count as 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById('save-el') // Grab the save-el paragraph and store it in a variable called saveEl

function increment() { // Increment the count variable when the button is clicked
  count += 1;
  countEl.textContent = count  // Change the count-el in the HTML - display the count
}


function save() { // Create a function called Save(), which logs out the count when it's called
  let countString = count + " - ";
  saveEl.textContent += countString; 
  // Setting count = 0 after saving
  countEl.textContent = 0;
  count = 0;
}

