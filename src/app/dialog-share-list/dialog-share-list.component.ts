import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { List, DataShare } from '../list-data/List';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ListsManagerService } from '../lists-manager.service';

@Component({
  selector: 'app-dialog-share-list',
  templateUrl: './dialog-share-list.component.html',
  styleUrls: ['./dialog-share-list.component.css']
})



export class DialogShareListComponent implements OnInit {

  public to_remove: string[] = [];
  cancel: boolean = true;

  constructor(public liste_service: ListsManagerService, public dialogRef: MatDialogRef<DialogShareListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataShare) { }

  ngOnInit() {
  }

  shareTo() {
    this.liste_service.addMember(this.data.list, this.data.user);
    this.updateUsers();
    this.data.user = '';
  }

  deleteMember() {
    this.data.list = this.liste_service.removeAccess(this.data.list, this.to_remove);
    this.liste_service.deleMember(this.data.list);
    console.log('New list: ', this.data.list);
    this.updateUsers();
    this.to_remove = [];
  }

  onNoClick(): void {
    this.cancelOperation();
    this.dialogRef.close();
  }

  cancelOperation() {
    this.to_remove.forEach(user => this.data.list.users_list.push(user));
    this.to_remove = [];
    this.cancel = true;
  }
  isCancelable() {
    return this.to_remove !== [];
  }
  updateUsers() {
    this.liste_service.getData().subscribe((lists: List[]) => this.data.list = lists.find(l => l.name == this.data.list.name));
  }
  drop(event: CdkDragDrop<string[]>, cancel_enabling?: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    if(cancel_enabling == 1)
    this.cancel = false;
  }
}
