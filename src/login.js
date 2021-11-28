const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_NAME = "hidden";

function loginBtnOn(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_NAME); 
    const myname = loginInput.value;
    localStorage.setItem("myname", myname);
    paintGreetings(myname);
}

function paintGreetings(myname){
    greeting.innerText= "Welcome " + myname;
    greeting.classList.remove(HIDDEN_NAME);
}

const savedMyname = localStorage.getItem("myname");

if (savedMyname === null ){
    loginForm.classList.remove(HIDDEN_NAME);
    loginForm.addEventListener("submit", loginBtnOn);
} else{
    paintGreetings(savedMyname);
}

loginForm.addEventListener("submit", loginBtnOn);
