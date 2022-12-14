import axios from "axios";

export class MoviesService {
  static API_KEY = "d416af5d4faee64e25ab001d87aab5c3";

  static _withBaseUrl(path) {
    return `https://api.themoviedb.org/3/${path}?api_key=${MoviesService.API_KEY
      }`;
  }

  static getPopularMovies() {
    return axios(withBaseUrl("movie/popular"));
  }

  static getById(id) {
    return axios(withBaseUrl(`movie/${id}`));
  }
}
