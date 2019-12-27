import React from 'react';
import axios from "axios"; //axios 사용하기 위해서 추가
import Movie from "./Movie";

// application은 render 함
// 처음에는 isLoading : true => 화면에 Loading...이 뜸
// application이 mount된 후, getMovies function 호출 
// getMovie는 axios.get 사용 ~ 완료되기까지 시간이 좀 필요해서 await 걸음

class App extends React.Component{
  
  state = {
    isLoading : true,
    movies : [] //미래에 있을 수 있는 것 같은 것도 미리 선언해줄수 있음
  };

  /*componentDidMount(){
    // setTimeout : delay function
    setTimeout(() =>{
      // book 이라는 state 추가하는 것도 가능
      // this.setState({isLoading : false, book : true});
      this.setState({isLoading : false});
    }, 6000);
  }*/

  // javascript 내용
  // async 는 비동기라서 붙임 
  getMovies = async () => {
    // 언제까지 기다려? *await* axios.get끝날때 까지! 
    const { data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //console.log(movies);
    this.setState({movies:movies, isLoading:false});
  }

  componentDidMount(){
    // axios는 fetch위에 있는 작은 레이어같은 
    // npm install axios 
    // axios.get이 느림. 그러므로 javascript에게 componenetDidMount함수가 끝날 때 까지 시간 걸린다고 알려주기&기다리기
    // componenetDidMount앞에 async붙이기 or function 만들기
    // const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.getMovies();
  }
  
  // map을 쓰면 무조건 return 생각하기
  render(){
    const { isLoading, movies} = this.state;
    return <div>{ isLoading ? "Loading..." : movies.map(movie => {
      console.log(movie);
      return <Movie id={movie.id} 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image}/>;
    })}</div>;
  }
}

export default App;
