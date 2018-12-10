import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/list-data/List';
import { ListsManagerService } from 'src/app/lists-manager.service';
import { Subscription } from 'rxjs';
import { TmdbService } from 'src/app/tmdb.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DialogDeleteMovieComponent } from '../dialog-delete-movie/dialog-delete-movie.component';
import { MatDialog } from '@angular/material';
import { MovieResponse } from '../tmdb-data/Movie';
import { DialogUpdateListComponent } from '../dialog-update-list/dialog-update-list.component';
import { DialogShareListComponent } from '../dialog-share-list/dialog-share-list.component';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit, OnDestroy {

  routeSubscription: any;
  name: string;
  list: List;
  subscription: Subscription;
  actualUser: string;

  constructor(private listeService: ListsManagerService, private tmdb: TmdbService, private route: ActivatedRoute,
     public liste_service: ListsManagerService, public dialog: MatDialog, public user: UserServiceService) {
      this.actualUser = this.user.getCredentials();
      }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((param: any) => {
      this.name = param['name'];
      this.loadList();
    });
  }

  drop(event: CdkDragDrop<{ title: string, poster: string }[]>) {
    moveItemInArray(this.list.movies, event.previousIndex, event.currentIndex);
  }

  /**
   * Retrieving data from the mock-up List.
   */
  loadList() {
    this.subscription = this.listeService.getData().subscribe(lists =>
       this.list = lists.find(a => a.name == this.name));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  get myList() {
    return this.list;
  }

  updateName(): void {
    const dialogRef = this.dialog.open(DialogUpdateListComponent, {
      width: '250px',
      data: '' 
    });

    dialogRef.afterClosed().subscribe((result:string) => {
      if(result !== undefined){
        this.listeService.updateList(this.list,result);
        this.name = result;
      }
      
    });
  }

  share_list(e: Event): void {
    e.stopPropagation();
    e.preventDefault();
    this.dialog.open(DialogShareListComponent, {
      width: '1200px',
      height: '600px',
      data: { list: this.list, user: "" }
    });
  }

  delete_list(movie: MovieResponse, e: Event): void {
    e.stopPropagation();
    e.preventDefault();
    this.dialog.open(DialogDeleteMovieComponent, {
      width: '250px',
      data: { list: this.list, movie: movie }
    });
  }

  /**
   * For image sake.
   */
  getPath(path: string): string {
    return this.tmdb.getPath(path);
  }
}