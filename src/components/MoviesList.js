import { Movie } from "./Movie";

export function MoviesList({ movies }) {

	return (
		<div className="container">

			{movies?.map((movie) => (
				<li key={movie.id}>
					<Movie movieId={movie.id} movieTitle={movie.title} overview={movie.overview} />
				</li>
			))}
		</div>
	);
}
