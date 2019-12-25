import React, {Component} from 'react';


// 컴포넌트는 js 함수와 유사하다.
// props 라고 하는 임의의 입력을 받은 후 화면에 어떻게 표시되는지를 기술하는 react 엘리먼트를 반환
//props는 읽기 전용이다. 함수 컴포넌트나 클래스 컴포넌트 모두 컴포넌트 자체 props를 수정해서는 안됨
// 컴포넌트 이름은 항상 대문자로 시작

// 컴포넌트 정의 방법 
// 1. js 함수 작성 (= 함수 컴포넌트)
function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}

// 2. class 사용하여 컴포넌트 정의
/*
class Welcome extends React.Component{
    render(){
        return <h1> Hello, {this.props.name}</h1>;
    }
}
 */

 // name = "sara"를 props 로 하여 Welcome component 호출함
 // Welcome 컴포넌트가 hello, sara 반환함
const element = <Welcome name="Sara"/>;

// 컴포넌트 합성
// 컴포넌트는 자신의 출력에 다른 컴포넌트를 참조할 수 있음.
function App(){
    return(
        <div>
            <Welcome name="jihye"/>
            <Welcome name="KiKi"/>
        </div>
    );
}

// 컴포넌트 추출
function Avatar(props){
    return (
        <img className="Avatar"
                     src={props.user.avatarUrl}
                     alt={props.user.name}/>
    );
}
function Comment(props){
    return(
        <div className = "Comment">
            <div className="UserInfo">
                <Avatar user={props.author}/>
                <div className ="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
        </div>
    );
}


class ComponentTest extends React.Component{
    render(){
        /* return element; 컴포넌트 이용 */
        return <App/>; 
    }
}

export default ComponentTest;
