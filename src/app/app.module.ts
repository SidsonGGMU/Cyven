import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';

import  {AngularFireModule} from 'angularfire2';
import  {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from '@angular/fire/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OthersComponent } from './others/others.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { DialogDeleteMovieComponent } from './dialog-delete-movie/dialog-delete-movie.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DialogDeleteListComponent } from './dialog-delete-list/dialog-delete-list.component';
import { DialogShareListComponent } from './dialog-share-list/dialog-share-list.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { DialogCreateListComponent } from './dialog-create-list/dialog-create-list.component';
import { AllListsManagerComponent } from './all-lists-manager/all-lists-manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TmdbService } from './tmdb.service';
import { ListsManagerService } from './lists-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DialogAddMovieComponent } from './dialog-add-movie/dialog-add-movie.component';
import { DialogUpdateListComponent } from './dialog-update-list/dialog-update-list.component';

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
    AllListsManagerComponent,
    PageNotFoundComponent,
    DialogAddMovieComponent,
    DialogUpdateListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MaterialModule,
    AppRoutingModule
  ],
  entryComponents: [
    DialogShareListComponent,
    DialogDeleteListComponent,
    DialogCreateListComponent,
    DialogAddMovieComponent,
    DialogDeleteMovieComponent,
    DialogUpdateListComponent
  ],
  providers: [TmdbService,ListsManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
