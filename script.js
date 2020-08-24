// Toggle-button for navigation bar
const toggleButton = document.querySelector(".toggle-button");
const navContainer = document.querySelector(".nav-container");

toggleButton.addEventListener("click", function(){
  console.log("show navbar");
  navContainer.classList.toggle("active");
});

// Prevent default for submit button
var button = document.querySelector("#submit");
button.addEventListener("submit", event => {
  event.preventDefault();
  console.log("prevent default and display message")
  alert("submit successfully");
});