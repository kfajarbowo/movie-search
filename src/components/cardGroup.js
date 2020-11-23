import React from 'react'
import {Card,CardGroup, Container,Row,Col} from 'react-bootstrap'

export default function cardGroup({movie}) {
    return (
			<Container>
				<CardGroup>
					<Row>
						<Col>
							<Card>
                            <img
								className="card--image"
								src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
								alt={movie.title + " poster"}
							/>
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. 
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<small className="text-muted">Last updated 3 mins ago</small>
								</Card.Footer>
							</Card>
						</Col>

						<Col>
							<Card>
                            <img
								className="card--image"
								src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
								alt={movie.title + " poster"}
							/>
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. 
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<small className="text-muted">Last updated 3 mins ago</small>
								</Card.Footer>
							</Card>
						</Col>

						<Col>
							<Card>
                            <img
								className="card--image"
								src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
								alt={movie.title + " poster"}
							/>
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. 
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<small className="text-muted">Last updated 3 mins ago</small>
								</Card.Footer>
							</Card>
						</Col>
					</Row>
				</CardGroup>
				<Row>
					<Col>1 of 3</Col>
					<Col xs={6}>2 of 3 (wider)</Col>
					<Col>3 of 3</Col>
				</Row>
			</Container>
		);
}
