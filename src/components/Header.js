import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { limparFavoritos } from "../actions/favorito";

export function Header() {
	const dispatcher = useDispatch();
	return (
		<header>
			<h1>Listagem de filmes</h1>

			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
                   	<li><Link to="/playlists">Favoritos</Link></li>	
					<button onClick={() => dispatcher(limparFavoritos())}>Limpar Favoritos</button>	
				</ul>
			</nav>
		</header>
		
	);
}
