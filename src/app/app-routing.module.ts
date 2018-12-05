import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllListsManagerComponent } from './all-lists-manager/all-lists-manager.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: AllListsManagerComponent
  },
  {
    path: 'listes/:name',
    component: ListDetailsComponent
  },
  {
    path: 'listes',
    component: AllListsManagerComponent
  },
  {
    path: 'film/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'search',
    component: SearchMovieComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
