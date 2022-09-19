import { useSelector } from "react-redux";
import { MovieFavorito } from "../components/MovieFavorito";
//import { MoviesList } from "../components/MoviesList";

export function Favoritos() {
	const  favoritos = useSelector(state => state.favorito);
    
    return (   
        <>       
			{favoritos.filmes?.map((p) => (
                <MovieFavorito movieId={p.movieId} movieTitle={p.movieTitle} overview={p.overview} />
            ))}
        </>
    );
}
