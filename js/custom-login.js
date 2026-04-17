const loginForm = document.querySelector("form");
const welcomeMessage = document.getElementById("welcomeMessage");

loginForm.addEventListener("submit", onSubmit);
function onSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const formData = {
        name: name,
        email: email,
        password: password
    };

    console.log(formData);

    welcomeMessage.textContent = `Welcome, ${name}! You are logged in!`;
}
