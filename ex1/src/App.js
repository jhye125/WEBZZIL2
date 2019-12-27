import React from 'react';
import PropTypes from "prop-types"; // 내가 쓸 props가 진짜 맞는 props인지 확인

function Food({name, picture,rating}){
return <div>
  <h1>I like {name}</h1>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name}></img>
  </div>;
}

Food.propTypes = { 
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

const foodILike = [{
  id:1,
  name : "kimbap",
  image :"http://recipe1.ezmember.co.kr/cache/recipe/2016/03/08/2fc67f67027ce82add8530df17cb5fc91.jpg",
  rating : 4.5
},{
  id:2,
  name : "bulgogi",
  image :"http://recipe1.ezmember.co.kr/cache/recipe/2016/12/30/df939769792632a48a0eba8bc895e8601.jpg",
  rating : 5
}];

function renderFood(dish){
  return <Food name={dish.name} picture={dish.image}/>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {/* dish는 object다 
          key는 react 내부에서 사용하기 위한거임 구분자 역할*/}
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
  
      {/*foodILike.map(renderFood)*/}
      ))}
    </div>
  );
}

export default App;
