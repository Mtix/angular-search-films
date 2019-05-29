import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/storage.service';
import { ApiService } from 'src/app/shared/api.service';
import { IFilm, IFilmResponse } from 'src/app/shared/interfaces/film.interface';
import { FilmModel } from 'src/app/shared/models/film.model';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-my-favorite',
  templateUrl: './my-favorite.component.html',
  styleUrls: ['./my-favorite.component.scss']
})
export class MyFavoriteComponent implements OnInit {

  favoriteIds = [];
  favoriteFilms: Array<IFilm> = [];
  loading = true;

  constructor(
    private readonly storageService: StorageService,
    private readonly apiService: ApiService,
  ) { }

  ngOnInit() {
    this.getFilms();
  }

  get getCount() {
    return this.favoriteFilms.length;
  }

  getFilms() {
    let searchResultObs: Array<Observable<IFilmResponse>> = [];

    this.updateFavoriteIds();

    this.favoriteIds.map(id => {
      searchResultObs.push(this.apiService.searchById(id, 'short'));
    });

    forkJoin(searchResultObs).subscribe((res) => {
      this.loading = false;
      res.map(item => {
        this.favoriteFilms.push(new FilmModel(item));
      });
    })
  }

  clearList() {
    this.favoriteFilms = [];
  }

  updateFavoriteIds() {
    this.favoriteIds = this.storageService.getState();
  }
  
  delete(id: string) {
    const state = this.storageService.getState<[]>();

    state.forEach((itemId, index) => {
      if (itemId === id) {
        state.splice(index, 1);
      }
    });

    this.storageService.setState(state);

    this.favoriteFilms.map((item, index) => {
      if (item.imdbID === id) {
        this.favoriteFilms.splice(index, 1);
      }
    });
  }

}
