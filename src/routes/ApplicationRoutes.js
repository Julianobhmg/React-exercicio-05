import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../views/Home";
import { Favoritos } from "../views/Favoritos";
const MovieDetail = lazy(() => import(/* webpackChunkName: "movieDetail" */ "../views/MovieDetail"));

export function ApplicationRoutes() {
	return (
		<Suspense fallback={<div>Carregando...</div>}>
			<Routes>
				<Route path="/" 				element={<Home />} />
				<Route path="/movie/:movieId" 	element={<MovieDetail />} />
				<Route path="/playlists" 		element={<Favoritos />} />
			</Routes>
		</Suspense>
	);
}
