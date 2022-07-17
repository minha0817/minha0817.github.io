const loginForm = document.querySelector("#login-form");

const loginInput = loginForm.querySelector("input");

const loginBtn = loginForm.querySelector("button");

const greeting = document.querySelector("#greeting");

const username = loginInput.value;

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    localStorage.setItem("username", username);
    paintGreetings(username);

};

function paintGreetings(username){
    greeting.innerHTML = `Have a nice day, ${username}`;
    greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

if(savedUsername === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
}   else {
    paintGreetings(savedUsername);
};

