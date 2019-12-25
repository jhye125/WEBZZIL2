import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ComponentTest from './CompoenetTest';
import StateAndLifecycle from './StateAndLifecycle';

function formatName(user){
    return user.firstName + ' ' + user.lastName; 
}

function getGreeting(user){
    if(user){
    return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello,Stranger.</h1>;
}

const user ={
    firstName :'Jihye',
    lastName : 'Kim'
};

//자바스크립트 구조체 배열 사용하기
var userlist = new Array();
function structUser()
{
    var firstName:String='';
    var lastName:String='';
}
for(var i=0; i<2; i++){
    userlist[i] = new structUser();
}
userlist[0].firstName = 'Jihye';
userlist[0].lastName = 'Kim';
userlist[1].firstName = 'KiKi';
userlist[1].lastName = 'Lee';

/*const element = (
    <h1>   
        {getGreeting(userlist[0])} and {getGreeting(userlist[1])}</h1>
);*/
//ReactDOM.render(element, document.getElementById('root'));


/*시간 찍기
// setInterval() 콜백을 이용해 초마다 ReactDom.render()를 호출
function tick(){
    const element = (
        <div>
            <h1>Hello,world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element,document.getElementById('root'));
}
setInterval(tick,1000);*/

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<ComponentTest/>, document.getElementById('root'));
ReactDOM.render(<StateAndLifecycle/>,document.getElementById('root'));


serviceWorker.unregister();
