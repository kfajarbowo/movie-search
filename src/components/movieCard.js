import React from 'react';
import {Card, CardGroup,Row,Col} from 'react-bootstrap';

export default function MovieCard({movie}) {
    
    return (
        
			<CardGroup>			
				<Row>
					<Col>
						<Card>
							<img
								className="card--image"
								src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
								alt={movie.title + " poster"}
							/>
							{/* <div className="card--content">
					<h3 className="card--title">{movie.title}</h3>
					<p>
						<small>Release Date : {movie.release_date}</small>
					</p>
					<p>
						<small>Rating : {movie.vote_average}</small>
					</p>
					<p className="card--desc">{movie.overview}</p>
				</div> */}
							<Card.Body>
								<Card.Title>{movie.title}</Card.Title>
								<p>
									<small>Release Date : {movie.release_date}</small>
								</p>
								<p>Rating {movie.vote_average}</p>
								<Card.Text>{movie.overview}</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Footer>
						</Card>
					</Col>
				</Row>
			</CardGroup>
		);
}
