import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListsManagerService } from '../lists-manager.service';
import { MatDialog } from '@angular/material';
import { List } from '../list-data/List';
import { Subscription } from 'rxjs';
import { DialogShareListComponent } from '../dialog-share-list/dialog-share-list.component';
import { DialogDeleteListComponent } from '../dialog-delete-list/dialog-delete-list.component';
import { DialogCreateListComponent } from '../dialog-create-list/dialog-create-list.component';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-all-lists-manager',
  templateUrl: './all-lists-manager.component.html',
  styleUrls: ['./all-lists-manager.component.css']
})
export class AllListsManagerComponent implements OnInit, OnDestroy {

  lists: List[];
  subscription: Subscription;
  actualUser: string;

  constructor(public liste_service: ListsManagerService, public dialog: MatDialog, public user: UserServiceService) {
    console.log("User", this.actualUser = this.user.getCredentials());
  }

  ngOnInit() {
    this.loadData();    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadData(){
    this.subscription = this.liste_service.getData().subscribe(data => {
      this.lists = this.liste_service.isMember(data);
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCreateListComponent, {
      width: '250px',
      data: { owner: this.actualUser, listname: '' }
    });


    dialogRef.afterClosed().subscribe(() => this.loadData());
  }

  delete_list(list, index: number, e: Event): void {
    e.stopPropagation();
    e.preventDefault();
    this.dialog.open(DialogDeleteListComponent, {
      width: '250px',
      data: { name: list.name, index: index }
    });
  }

  share_list(list, index:number, e: Event): void {
    e.stopPropagation();
    e.preventDefault();
    this.dialog.open(DialogShareListComponent, {
      width: '1200px',
      height: '600px',
      data: { list: list, user: "" }
    });
  }

  get load_lists() {
    return this.lists;
  }
}
