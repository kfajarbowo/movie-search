import React, {useState} from "react";
// import MovieCard from './movieCard.js';
import CardGroup from './cardGroup.js';
export default function SearchMovies() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=ecb4f95925056117fe020a3233ea222e&language=en-US&query=${query}&page=1&include_adult=false`;

        try{   
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        }catch(err){
            console.log(err);
        }
    }

    return (
			<>
				<form className="form" onSubmit={searchMovies}>
					<label className="label" htmlFor="query">
						Movie Name
					</label>
					<input
						className="input"
						name="query"
						type="text"
						placeholder="i.e Hobbit"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<button className="button" type="submit">
						Search
					</button>
				</form>

				<div className="card-list">
                    {/* {movies
                        .filter((movie) => movie.poster_path)
                        .map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))} */}
                    {movies
                        .filter((movie) => movie.poster_path)
                        .map((movie) => (
                            <CardGroup movie={movie} key={movie.id} />
                        ))}

				</div>
			</>
		);
}
