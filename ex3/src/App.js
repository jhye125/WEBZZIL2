import React from 'react';
import { HashRouter ,Route} from "react-router-dom"; // 라우터 사용 import
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

// router 사용
// npm install react-router-dom
// 라우터는 ? url을 가져다가 확인하고 라우터에게 뭘 명령했냐에 따라 라우터가 해당 컴포넌트를 가져옴
// /home/introcduction 은 home + introduction 랜더링 -> path = /home + /introduction

function App(){
  return <HashRouter>
    {/*
    <Route path="/home">
      <h1>Home</h1>
    </Route>
    <Route path="/home/introduction">
      <h1>Introduction</h1>
    </Route>
    <Route path="/about">
      <h1>About</h1>
    </Route>
    */}
      <Navigation />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie-detail" componenet={Detail}/>
    </HashRouter>;

}

export default App;

