import React from "react";

class Detail extends React.Component{
    
    componenetDidMount(){
        const {location,history} = this.props;
        console.log(this.props);
        if(location.state === undefined ){
            history.push("/");
        }
    }

    render(){
        const {location} = this.props;
        if(location.state){
            return <span>{location.state.title}</span>;
        }else {
            return null;
        }
    }
}


export default Detail;