import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// movies componenet는 state가 필요없음 
// state가 필요없는 component는 class component로 만들 필요가 없음
// 그러므로 movie는 function componenet로~
// img alt는 이미지에 마우스 올렸을 때 title 보이는거임
function Movie({id, year, title , summary, poster}){
    return <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
        </div>
    </div>;
}

Movie.propTypes ={
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

export default Movie;