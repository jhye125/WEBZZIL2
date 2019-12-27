import React from "react";
import PropTypes from "prop-types";

// movies componenet는 state가 필요없음 
// state가 필요없는 component는 class component로 만들 필요가 없음
// 그러므로 movie는 function componenet로~
function Movie(id, year, title , summary, poster){
    return <h4>{title}</h4>;
}

Movie.propTypes ={
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

export default Movie;