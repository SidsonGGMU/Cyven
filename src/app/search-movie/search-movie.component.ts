import { Component, OnInit } from '@angular/core';
import { SearchContent, MovieResult } from '../tmdb-data/searchMovie';
import { TmdbService } from '../tmdb.service';
import { ListsManagerService } from '../lists-manager.service';
import { List } from '../list-data/List';
import { MatDialog } from '@angular/material';
import { DialogAddMovieComponent } from '../dialog-add-movie/dialog-add-movie.component';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  query;
  string;
  searchContent: SearchContent;
  lists: List[];
  selectedList: string;
  actualUser : string;

  constructor(private tmdb: TmdbService, private listeService: ListsManagerService, 
    public dialog: MatDialog,  public user: UserServiceService) {
      this.actualUser = this.user.getCredentials();
  }

  ngOnInit() {
    this.tmdb.init('af82599daa1c8b9cef254d429ec0d436');
    this.listeService.getData().subscribe(list => this.lists = list.filter((l: List) => l.owner==this.actualUser));
    this.searchContent = this.tmdb.getLastSearched();
  }

  searchMovie() {
    this.tmdb.searchMovieDetails({ query: this.query, include_adult: true })
      .then((resp) => {
        console.log('Searched test: ', this.searchContent = resp)
        this.tmdb.stroreLastSearched(resp);
      })
      .catch(err => console.error('Error getting genres:', err));
  }

  getPath(path: string): string {
    return this.tmdb.getPath(path);
  }

  addMovie(movie: MovieResult, e : Event): void {
    e.stopPropagation();
    e.preventDefault();
    console.log("Paramètre film: ", movie)
    const dialogRef = this.dialog.open(DialogAddMovieComponent, {
      width: '250px',
      data: { listes: this.lists, selected: "" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log("Liste: ", this.selectedList = result['selected']);
      this.listeService.pushMovieToList(this.selectedList, movie);
    });
  }
}