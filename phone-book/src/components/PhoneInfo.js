import React, {Component } from 'react';

class PhoneInfo extends Component{

    // info라는 객체를 props로 받아와서 렌더링 해줄거임
    // 실수로 info값 전달해주는 거 까먹으면 컴포넌트 크래쉬됨
    // info가 undefined 일 때에는 비구조화 할당을 통해 내부의 값 받아오기 못함
    // 그러므로 defaultProps를 통해 info 기본값 설정
    static defaultProps={
        info:{
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }

    state = {
        // 수정 버튼을 눌렀을 때 editing 값을 true로 설정
        // true : 기존에 텍스트 형태로 보여주던 값들을 input 형태로 보여주게됨
        editing:false,
        name:'',
        phone:'',
    }

    // 삭제 버튼 눌렸을 때 실행
    handleRemove = () => {
        const {info,onRemove} = this.props;
        //삭제 버튼이 클릭되면 onRemove에 id 넣어서 호출
        onRemove(info.id);
    }

    //editing 값 반전 시키는 함수
    handleToggleEdit = () => {
        const {editing} = this.state;
        this.setState({editing: !editing});
    }

    //input에서 onChange 이벤트 발생될 때 호출되는 함수
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]:value});
    }

    // editing 값이 바뀔 때 처리 할 로직
    // 수정을 눌렀을 땐 기존의 값이 input에 나타나고, 수정 적용할땐 input의 값들을 부모한테 전달
    componentDidUpdate(prevProps, prevState){
        const {info,onUpdate} = this.props;
        if(!prevState.editing && this.state.editing){
            //editing이 false -> true 로 전환될 때 info의 값을 state에 넣어줌
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if(prevState.editing && !this.state.editing){
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    render(){
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin:'8px'
        };

        
        const {editing} = this.state;
        if(editing){
            //수정모드
            return(
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name ="name"
                            placeholder="이름"
                            onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}/>
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            );
        }
        
        //일반모드 
        const{name,phone} = this.props.info;

        return(
            <div style = {style}>
            <div><b>{name}</b></div>
            <div>{phone}</div>
            <button onClick={this.handleToggleEdit}>수정</button>
            <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}
export default PhoneInfo;