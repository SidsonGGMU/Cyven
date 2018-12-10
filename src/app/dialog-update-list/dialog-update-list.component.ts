import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ListsManagerService } from '../lists-manager.service';
import { DataDialog } from '../list-data/List';

@Component({
  selector: 'app-dialog-update-list',
  templateUrl: './dialog-update-list.component.html',
  styleUrls: ['./dialog-update-list.component.css']
})

export class DialogUpdateListComponent implements OnInit {

  constructor(public liste_service: ListsManagerService, public dialogRef: MatDialogRef<DialogUpdateListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}