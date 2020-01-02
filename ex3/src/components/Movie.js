import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import {Link} from "react-router-dom";

// movies componenet는 state가 필요없음 
// state가 필요없는 component는 class component로 만들 필요가 없음
// 그러므로 movie는 function componenet로~
// img alt는 이미지에 마우스 올렸을 때 title 보이는거임

function Movie({id, year, title , summary, poster, genres}){
    return (
        <Link to = {{
            pathname:"/movie-detail",
            state : {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}
        >
            <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="genres">{genres.map((genre,index) => (
            <li key={index} className="genres__genre">{genre}</li>))}</ul>>
            <p className="movie__summary">{summary}</p>
            </div>
            </div> 
        </Link>
         );
}

Movie.propTypes ={
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;