import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component{
    
    
    static defaultProps = {
        data:[],
        onRemove:() => console.warn('onRemove not defined'),
        onUpdate:() => console.warn('onUpdate not defined'),
    }

    render(){
        // props로 전달받은 onRemove를 그대로 전달 
        // 이 함수가 전달되지 않았을 경우 대비해서 해당 props를 위한 defaultProps도 설정해야함
        const {data, onRemove, onUpdate} = this.props;

        {/* data라는 배열을 가져와서 map을 통하여 jsx로 변환해줌
            key는 리액트에서 배열을 렌더링할 때 꼭 필요한 값
            리액트는 배열을 렌더링 할 때 key 값을 통하여 업데이트 성능을 최적화함 */}
        const list = data.map(
            info => (
                <PhoneInfo 
                    key={info.id} 
                    info={info}
                    onRemove={onRemove}
                    onUpdate={onUpdate}/>)
        );

        return(
            <div>
                {list}
            </div>
        );
    }
}
export default PhoneInfoList;