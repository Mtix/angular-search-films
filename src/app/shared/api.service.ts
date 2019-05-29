import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IFilmResponse } from './interfaces/film.interface';
import { IFilmSearchResponse } from './interfaces/film-search.interface';

type Plot = 'short' | 'full';

@Injectable()
export class ApiService {

    private _apiKey: string;
    private _apiUrl: string;

    constructor(private readonly http: HttpClient) {
        /**
         * TODO вынесли ключи в .env
         */
        this._apiKey = 'd1047b1e';
        this._apiUrl = `http://www.omdbapi.com?apikey=${this._apiKey}`;
    }

    search(search: string): Observable<IFilmSearchResponse> {
        const params = new HttpParams().set('s', search);

        return this.http.get<IFilmSearchResponse>(this._apiUrl, { params: params });
    }

    searchById(id: string, plot: Plot): Observable<IFilmResponse> {
        let params = new HttpParams().set('i', String(id)).set('plot', plot ? plot : 'short');

        return this.http.get<IFilmResponse>(this._apiUrl, { params });
    }



}
