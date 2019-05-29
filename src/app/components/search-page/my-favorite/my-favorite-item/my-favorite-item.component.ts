import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFilm } from 'src/app/shared/interfaces/film.interface';

@Component({
  selector: 'app-my-favorite-item',
  templateUrl: './my-favorite-item.component.html',
  styleUrls: ['./my-favorite-item.component.scss']
})
export class MyFavoriteItemComponent implements OnInit {

  @Input()
  film: IFilm;
  @Output()
  deleteFilm = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  delete(id: string) {
    this.deleteFilm.emit(id);
  }

}
