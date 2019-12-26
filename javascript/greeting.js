const form = document.querySelector(".js-form"), 
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

//사용자 이름 기억하게 하기
function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();  // evnet가 발생하면 document 까지 올라감 -> 이거 막음
    const currentValue = input.value;
    //console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText=`Hello ${text}`;
}

function localName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    askForName();
  }else{
    paintGreeting(currentUser);
  }
}

function init(){
  localName();
}

init();