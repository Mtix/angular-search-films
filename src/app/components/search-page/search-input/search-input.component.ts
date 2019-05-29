import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { IFilmSearch, IFilmSearchResponse } from 'src/app/shared/interfaces/film-search.interface';
import { FormControl } from '@angular/forms';
import { debounce } from 'rxjs/operators';
import { FilmSearchModel } from 'src/app/shared/models/film-search.model';
import { timer, Observable } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  public searchResult: IFilmSearch = new FilmSearchModel();
  public searchInput = new FormControl();

  constructor(private readonly apiService: ApiService) {
    this.searchInput
      .valueChanges
      .pipe(debounce(() => timer(600)))
      .subscribe((value) => {
        this.search(value);
      });
  }

  ngOnInit() {
  }

  search(query: string) {
    this.apiService.search(query).subscribe((response: IFilmSearchResponse) => {
      this.searchResult = new FilmSearchModel(response);
      console.log(this.searchResult);
    });
  }

}
