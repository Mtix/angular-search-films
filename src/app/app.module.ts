import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Modules
 */
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchInputComponent } from './components/search-page/search-input/search-input.component';
import { MyFavoriteComponent } from './components/search-page/my-favorite/my-favorite.component';
import { MyFavoriteItemComponent } from './components/search-page/my-favorite/my-favorite-item/my-favorite-item.component';
import { ApiService } from './shared/api.service';
import { StorageService } from './shared/storage.service';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    SearchInputComponent,
    MyFavoriteComponent,
    MyFavoriteItemComponent,
    FilmCardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
