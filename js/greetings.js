const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = "username";


function onLoginSubmit(event) { // html submit 함수의 새로고침을 막고, 인풋된 유저 네임을 받아서 저장하고, 로컬 스토리지에 저장한후 로컬폼을 감추고 인사말을 표시한다.
    event.preventDefault();
    console.log(loginInput.value);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
    
}

function paintGreeting(username) { // 인사말 표시 함수, greeting html의 hidden 스타일을 제거 후 인사말 표시
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}!`;
}


const savedUsername = localStorage.getItem(USERNAME_KEY); // 로컬 스토리지에 저장되는 유저네임

if (savedUsername === null) { // 로컬 스토리지에 저장된 이름이 없으면 로그인 폼 표시
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else { // 저장된 이름이 있으면 인사말 표시
    paintGreeting(savedUsername);   
}
