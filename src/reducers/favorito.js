import { SET_FAVORITO } from "../actions/favorito";
import { LIMPAR_FAVORITOS } from "../actions/favorito";

const initialState = {
    filmes: []
}

export function favorito(state = initialState, action) {
    switch (action.type) {
        case SET_FAVORITO:
            return {
                ...state,
                filmes: state.filmes.concat(action.favoritosLoad)
            };
        case LIMPAR_FAVORITOS:
            return {
                ...state,
                filmes: []
            }
        default:
            return state;
    }
}