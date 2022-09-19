import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorito } from "../actions/favorito";
import { useSelector } from "react-redux";

export function Movie({ movieId, movieTitle, overview }) {
	const dispatcher = useDispatch();
	const favorito = useSelector(state => state.favorito);
	return (
		<div className="movie">
			<h3>
				<Link to={`/movie/${movieId}`}>{movieTitle}</Link>
				<br></br>
				<button onClick={() => dispatcher(addFavorito({movieId, movieTitle, overview}))}>Favoritar: ({favorito.filmes.length})</button>	
				<p className="movie-overview">{overview}</p>
			</h3>
		</div>
	)
}