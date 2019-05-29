import { IFilmSearch, IFilmSearchResponse } from '../interfaces/film-search.interface';

export class FilmSearchModel implements IFilmSearch {
    films: Array<{
        title: string;
        year: string;
        imdbID: string;
        type: string;
        poster: string | null;
    }>;
    totalResults: string;
    response: string;

    constructor(data?: IFilmSearchResponse) {

        if(data && data.Search && data.Search.length) {
            this.films = data.Search.map(item => {
                return {
                    title: item.Title,
                    year: item.Year,
                    imdbID: item.imdbID,
                    type: item.Type,
                    poster: item.Poster !== 'N/A' ? item.Poster : null,
                }
            });
        } else {
            this.films = [];
        }

        this.totalResults = data && data.totalResults ? data.totalResults : '';
        this.response = data && data.Response ? data.Response : '';
    }
}