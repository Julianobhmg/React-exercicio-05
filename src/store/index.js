import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { favorito } from "../reducers/favorito";

export const store = configureStore({
    reducer: combineReducers({ favorito })
});