import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ListsManagerService } from '../lists-manager.service';

@Component({
  selector: 'app-dialog-delete-list',
  templateUrl: './dialog-delete-list.component.html',
  styleUrls: ['./dialog-delete-list.component.css']
})
export class DialogDeleteListComponent implements OnInit {

  constructor(public liste_service: ListsManagerService, public dialogRef: MatDialogRef<DialogDeleteListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
    console.log("Valeur: ", this.data);
  }

  onYesClick() : void {
    console.log(this.data.name);
    this.liste_service.deleteList(this.data.name);
    this.dialogRef.close();
  }

}
