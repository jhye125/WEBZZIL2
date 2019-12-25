import React,{Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

// 컴포넌트끼리 직접 소통하지 않고 app을 통해서 소통
// PhoneInfo , PhoneForm , PhoneInfoList 끼리는 소통 ㄴㄴ -> App을 통해서!!
// 컴포넌트끼리 소통하고 싶으면 리덕션쓰기 
 
class App extends Component {
  //컴포넌트 내부에서 필요한 값중에서 렌더링 되는것과 상관없는 것들은 굳이 state에 넣을 필요 없음
  id = 2

  //state 생성
  state = {
    //information 배열 만듬
    information:[
      {
        id:0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id:1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ]
  }

  //전화번호 추가
  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information : information.concat({id:this.id++,...data})
    })
  }

  //전화번호 삭제
  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information : information.filter(info => info.id !== id)
    })
  }
  
  handleUpdate = (id,data) =>{
    const {information} = this.state;
    this.setState({
      // update할 객체의 새 객체를 만들어서 기존의 값과 전달받은 data 덮어씀 
      // update안할 객체는 그대로 기존값 유지
      information : information.map(info => id ===info.id ? {...info,...data} : info)
    })
  }

  render(){
    const {information} = this.state;
    return(
      <div>
        {/* 새아이템을 생성하는 onCreate 함수를 props로 PhoneForm에게 전달*/}
        <PhoneForm 
          onCreate={this.handleCreate}/>
        <PhoneInfoList
          data={information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}/>
      </div>
    );
  }
}

export default App;
