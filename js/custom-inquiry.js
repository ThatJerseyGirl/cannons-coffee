const loginForm = document.getElementById("loginForm");
const welcomeMessage = document.getElementById("welcomeMessage");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log({ name, email, password });

  welcomeMessage.textContent = `Welcome, ${name}! You are logged in!`;

  loginForm.style.display = "none";
});