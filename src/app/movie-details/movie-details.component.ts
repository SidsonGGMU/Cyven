import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../tmdb-data/Movie';
import { MovieResult } from '../tmdb-data/searchMovie';
import { DialogAddMovieComponent } from '../dialog-add-movie/dialog-add-movie.component';
import { MatDialog } from '@angular/material';
import { List } from '../list-data/List';
import { ListsManagerService } from '../lists-manager.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  private movieDetails: MovieDetails; // Film en cours
  private id: any;
  private routeSubscription: any;
  lists: List[];
  selectedList: string;
  actualUser: string;



  constructor(private tmdb: TmdbService, private listeService: ListsManagerService,
     private route: ActivatedRoute, public dialog: MatDialog, public user: UserServiceService) {
      this.actualUser = this.user.getCredentials();
    }
  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((param: any) => {
      this.id = param['id'];
      this.tmdb.init('af82599daa1c8b9cef254d429ec0d436'); // Clef de TMDB
      this.loadCurrentMovie();
    });
    this.listeService.getData().subscribe(list => this.lists = list.filter((l: List) => l.owner==this.actualUser));
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  /**
   * Movie details retrieved after call of this method.
   */
  loadCurrentMovie() {
    this.tmdb.getMovieDetails(this.id)
      .then((m: MovieDetails) => {
        this.movieDetails = m;
        this.movieDetails.crew.cast = m.crew.cast.slice(0, 5);
        this.movieDetails.recommendations.results = m.recommendations.results.slice(0, 4);
      })
      .catch(err => console.error('Error getting movie:', err));
  }

  get movie(): any {
    return this.movieDetails;
  }

  getPath(path: string): string {
    return this.tmdb.getPath(path);
  }

  getStatus(): String {
    return this.movieDetails.movie.status;
  }

  getBudget(): number {
    return this.movieDetails.movie.budget / 100;
  }

  getRecette(): number {
    return this.movieDetails.movie.revenue;
  }

  getTime(): String {
    return ((this.movieDetails.movie.runtime / 60) ^ 0).toString() + 'h ' + (this.movieDetails.movie.runtime % 60).toString() + 'm';
  }

  addMovie(): void {
    const dialogRef = this.dialog.open(DialogAddMovieComponent, {
      width: '250px',
      data: { listes: this.lists, selected: "" }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selectedList = result['selected'];
      this.listeService.pushMovieToList(this.selectedList, this.movieDetails.movie);
    });
  }
}