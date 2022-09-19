import { Link } from "react-router-dom";

export function MovieFavorito({ movieId, movieTitle, overview }) {
	return (
		<div className="movie">
			<h3>
				<Link to={`/movie/${movieId}`}>{movieTitle}</Link>
				<br></br>
				<p className="movie-overview">{overview}</p>
			</h3>
		</div>
	)
}