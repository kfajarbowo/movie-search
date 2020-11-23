import React from 'react';
import SearchMovies from './components/searchMovies';
// import CardGroup from './components/cardGroup'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Background from './bg.jpg';

function App() {
  return (
		<div className="body-wrap">
      <main className="content">
			<div className="container">
				<h1 className="title">React Movie Search</h1>
				<SearchMovies></SearchMovies>
			</div>
				{/* <CardGroup></CardGroup> */}

      </main>
		</div>
	);
}

export default App;
