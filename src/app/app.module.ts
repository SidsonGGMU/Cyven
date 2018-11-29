import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OthersComponent } from './others/others.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { DialogDeleteMovieComponent } from './dialog-delete-movie/dialog-delete-movie.component';
import { DialogDeleteListComponent } from './dialog-delete-list/dialog-delete-list.component';
import { DialogShareListComponent } from './dialog-share-list/dialog-share-list.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { DialogCreateListComponent } from './dialog-create-list/dialog-create-list.component';
import { AllListsManagerComponent } from './all-lists-manager/all-lists-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    OthersComponent,
    ListDetailsComponent,
    MovieDetailsComponent,
    DialogDeleteMovieComponent,
    DialogDeleteListComponent,
    DialogShareListComponent,
    SearchMovieComponent,
    DialogCreateListComponent,
    AllListsManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
