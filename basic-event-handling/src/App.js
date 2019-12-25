import React,{Component} from 'react';
import './App.css';

class App extends Component{
  
  // id와 pw로 state 정의
  state = {
    id:'',
    password:''
  }

  //input value 변경 -> onChnage
  appChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  //로그인 버튼 클릭 했을때 실행
  appClick = () =>{
    console.log(`id는 : ${this.state.id}\npw는 : ${this.state.password}`);
  }

  //pw 입력하고 enter 쳤을때 실행
  appKeyPress = (e) =>{
    if(e.key === 'Enter'){
      this.appClick();
    }
  }

  render(){
    const { id, password } = this.state;
    const { appChange, appClick, appKeyPress } = this;
    return(
      <div className="App">
        <header className="App-header">
          <input type="text" name="id" value={id} placeholder="아이디" 
          onChange={appChange}/>
          <input type="password" 
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={appChange}
          onKeyPress={appKeyPress}/>
          <button onClick={appClick}>로그인</button>
        </header>
      </div>
    );
  }
}

export default App;
