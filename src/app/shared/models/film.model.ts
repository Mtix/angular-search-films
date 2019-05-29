import { IFilm, IFilmResponse } from '../interfaces/film.interface';

export class FilmModel implements IFilm {
    imdbID: string;
    imdbRating: string;
    title: string;
    actors: string;
    awards: string;
    boxOffice: string;
    country: string;
    director: string;
    genre: string;
    language: string;
    metascore: string;
    plot: string;
    poster: string;
    production: string;
    rated: string;
    released: string;
    runtime: string;

    constructor(film: IFilmResponse) {
        this.imdbID = film.imdbID;
        this.imdbRating = film.imdbRating;
        this.title = film.Title;
        this.actors = film.Actors;
        this.awards = film.Awards;
        this.boxOffice = film.BoxOffice;
        this.country = film.Country;
        this.director = film.Director;
        this.genre = film.Genre;
        this.language = film.Language;
        this.metascore = film.Metascore;
        this.plot = film.Poster;
        this.poster = film.Poster;
        this.production = film.Production;
        this.rated = film.Rated;
        this.released = film.Released;
        this.runtime = film.Runtime;
    }
}