import { useState, useEffect } from "react";
import Header from "./component/Header";
import Banner from "./component/Banner";
import MovieList from "./component/MovieList";
import MovieSearch from "./component/MovieSearch";
import { MovieProvider } from "./context/MovieProvider";

function App() {
  const [movie, setMovie] = useState([]);
  const [topRate, setTopRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchVal) => {
    try {
      setMovieSearch([]);
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}}&include_adult=false&language=vi&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fectchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const urlPolular =
        "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
      const urlTopRate =
        "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1";

      const [resMovie, resRate] = await Promise.all([
        fetch(urlPolular, options),
        fetch(urlTopRate, options),
      ]);

      const dataMovie = await resMovie.json();
      const dataRate = await resRate.json();

      setMovie(dataMovie.results);
      setTopRate(dataRate.results);
    };
    fectchMovie();
  }, []);

  return (
    <>
      <MovieProvider>
        <div className="bg-black pb-10">
          <Header onSearch={handleSearch} />
          <Banner/>
          {movieSearch.length > 0 ? (
            <MovieSearch title={"Kết Quả Tìm Kiếm"} data={movieSearch} />
          ) : (
            <>
              <MovieList title={"Phim Hot"} data={movie} />
              <MovieList title={"Phim Đề Cử"} data={topRate} />
            </>
          )}
        </div>
      </MovieProvider>
    </>
  );
}

export default App;
