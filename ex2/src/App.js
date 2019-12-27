import React from 'react';

// class component
// ** react는 자동적으로 class component의 render method를 실행함 **
// class component와 function component 의 차이점 : state!!
// state는 object. 
// component에 data를 넣을 공간이 있고 이 데이터는 변함
// react.Component에서 사용하는 유일한 function = render function

//lifecycle
// life cycle method는 기본적으로 react가 component를 생성/삭제하는 방법임
// mount : 생성 update : 업데이트 unmont : 죽음, 페이지 바꿈
// constructor->render->componentDidMount 순으로 실행
// setState호출하면 component 호출 > render > 업데이트 완료 > componentDidUpdate

class App extends React.Component{
  
  // constructor는 자바스크립트꺼~
  constructor(props){
    super(props);
    console.log("hello");
  }

  // 내가 바꿀 데이터를 state안에 넣으면 됨 -> 바꾸고싶은 data는 state에 넣기
  state = {
    count:0
  };

  add = () => {
    console.log("add");
    // this.state.count =1; 이렇게 안쓰는 이유
    // 이렇게 쓰면 react는 render function을 refresh 하지않음
    // = 매번 state의 상태를 변경할 때 react가 render function을 호출해서 바꿔주길 원함
    // state를 set할 때 this.state사용 좋지 않음 
    // current : react가 현재 상태 줌
    // ** setState를 호출할 때 마다 react는 새로운 state와 함께 render function을 호출함 **
    this.setState(current => ({count: current.count +1}));
  };

  minus = () => {
    console.log("minus");
    this.setState(current => ({count: current.count-1}));
  };

  componentDidMount(){
    console.log("Component rendered");
  }

  componentDidUpdate(){
    console.log("I just updated");
  }

  // component가 떠날 때 호출됨 ex) 다른페이지로 가거나 
  componentWillUnmount(){
    console.log("Goodbye, cruel world");
  }

  render(){
      console.log("I'm rendering");
      return (
          <div>
            <h1>The number is : {this.state.count}</h1>
            {/* onClick은 react거 
                this.add() : 이렇게 쓰면 그냥 즉시 실행되는거임
                this.add 해야지 클릭됐을 때 실행 */}
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
          </div>
      );
  } 
}

export default App;
