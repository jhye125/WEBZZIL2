import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

// 링크는 라우터 안에서만 사용 가능
function Navigation(){
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;