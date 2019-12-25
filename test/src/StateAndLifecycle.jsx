import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Clock 컴포넌트를 완전히 재사용 & 캡슐화
// State는 props와 유사하지만, 비공개이며 컴포넌트에 의해 완전히 제어됨

// 함수에서 클래스로 변환하기
/*function Clock(props){
    return (
        <div>
            <h1>Hello, World</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );

}*/

/*class Clock extends React.Component {
    // render()라고 불리는 빈 메소드 추가
    render(){
        //함수 내용을 render() 메소드 안으로 옮김
        //rneder() 내용안에 있는 props를 this.props로 변경
        return(
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}*/
// render 메소드는 업데이트가 발생할 때 마다 호출되지만, 
// 같은 DOM 노드로 <Clock />을 렌더링하는 경우 Clock 클래스의 단일 인스턴스만 사용된다. 
// > 로컬 state와 생명주기 메서드와 같은 부가적인 기능 사용가능하게함

/*function tick(){
    ReactDOM.render(<Clock date = {new Date()}/>,document.getElementById('root'));
}
setInterval(tick,1000);*/


// 클래스에 로컬 State추가하기 
class StateAndLifecycle extends React.Component {
    
    // 초기 this.state를 지정하는 class constructor를 추가함
    // 클래스 컴포넌트는 항상 props로 기본 constructor를 호출해야함
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    // 생명주기 메소드
    // 컴포넌트 출력물이 dom에 렌더링 된 후에 실행됨. 타이머 설정하기 좋은 장소
    componentDidMount(){
        // this.props가 react에 의해 스스로 설정되고 this.state가 특수한 의미가 있지만
        // 타이머 id와 같이 데이터 흐름안에 포함되지 않는 항목을 보관할 필요가 있다면
        // 자유롭게 클래스에 수동으로 부가적인 필드를 추가해도 됨
        this.timerID = setInterval(
            () => this.tick(),1000
        );
    }

    // 타이머 분해
    // SAL컴포넌트가 dom으로 부터 한번이라도 삭제된 적이 있다면 react는 타이머를 멈추기 위해 이 메소드 호출
    componentWillMount(){
        clearInterval(this.timerID);
    }

    //StateAndLifecycle 컴포넌트가 매초 작동하도록 함
    tick(){
        //컴포넌트 로컬 state를 업데이트 하기 위해서 setState를 사용
        this.setState({
            date : new Date()
        });
    }

    // render()메소드가 호출되면 react는 화면에 표시되어야 할 내용을 알게됨
    // react는 SAL의 렌더링 출력값을 일치시키기 위해 dom을 업데이트
    render(){
        // this.props 를 this.state로 변경
        return(
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

}

export default StateAndLifecycle;