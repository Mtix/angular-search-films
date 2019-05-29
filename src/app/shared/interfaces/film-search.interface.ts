export class IFilmSearch {
    films: Array<{
        title: string;
        year: string;
        imdbID: string;
        type: string;
        poster: string;
    }>;
    totalResults: string;
    response: string;
}

export class IFilmSearchResponse {
    Search: Array<{
        Title: string;
        Year: string;
        imdbID: string;
        Type: string;
        Poster: string;
    }>;
    totalResults: string;
    Response: string;
}