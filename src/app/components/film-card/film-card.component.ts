import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { StorageService } from '../../shared/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { FilmModel } from 'src/app/shared/models/film.model';
import { IFilm } from 'src/app/shared/interfaces/film.interface';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {

  filmInfo: IFilm;
  filmId: string;
  favoriteFilm: boolean = false;
  
  constructor(
    private readonly apiService: ApiService,
    private readonly storageService: StorageService,
    private readonly activeRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly location: Location,
  ) {
    const id: Observable<string> = this.activeRoute.params.pipe(map(p => p.id));

    id.subscribe((value) => {
      this.filmId = value;
      this.searchById(this.filmId);
    });
  }

  ngOnInit() {
    this.checkFavorite();
  }

  checkFavorite() {
    this.favoriteFilm = this.storageService.findId(this.filmId);
  }

  searchById(id: string) {
    this.apiService.searchById(id, 'full').subscribe((res) => {
      this.filmInfo = new FilmModel(res);

      if (!this.filmInfo.imdbID) {
        this.router.navigate(['/404'], { relativeTo: this.activeRoute });
      }
      console.log(this.filmInfo);
    })
  }

  back() {
    this.location.back();
  }

  save() {
    this.storageService.addId(this.filmId);
    this.checkFavorite();
  }

}
