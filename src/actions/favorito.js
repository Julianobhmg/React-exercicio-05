export const SET_FAVORITO = "SET_FAVORITO";
export const LIMPAR_FAVORITOS = "LIMPAR_FAVORITOS";

export const addFavorito = (filme) => ({
    type: SET_FAVORITO,
    favoritosLoad: filme,
});

export const limparFavoritos = () => ({
	type: LIMPAR_FAVORITOS
});