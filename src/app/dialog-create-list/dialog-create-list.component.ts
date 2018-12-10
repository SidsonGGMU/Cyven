import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ListsManagerService } from '../lists-manager.service';
import { DataDialog } from '../list-data/List';


@Component({
  selector: 'app-dialog-create-list',
  templateUrl: './dialog-create-list.component.html',
  styleUrls: ['./dialog-create-list.component.css']
})
export class DialogCreateListComponent implements OnInit {

  constructor(public liste_service: ListsManagerService, public dialogRef: MatDialogRef<DialogCreateListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataDialog) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
    console.log("Valeur: ", this.data);
  }

  closeDialog () : void {
    if (this.data.listname !== undefined) {
      this.liste_service.pushNewList({owner: this.data.owner, name : this.data.listname, movies : [], users_list : []});
    }
    this.dialogRef.close();
  }
}