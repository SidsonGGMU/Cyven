import { Component, OnInit, Inject } from '@angular/core';
import { ListsManagerService } from '../lists-manager.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogDeleteListComponent } from '../dialog-delete-list/dialog-delete-list.component';

@Component({
  selector: 'app-dialog-delete-movie',
  templateUrl: './dialog-delete-movie.component.html',
  styleUrls: ['./dialog-delete-movie.component.css']
})
export class DialogDeleteMovieComponent implements OnInit {

  constructor(public liste_service: ListsManagerService, public dialogRef: MatDialogRef<DialogDeleteMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() : void {
    
    this.data.list = this.liste_service.removeMovie(this.data.list, this.data.movie);
    console.log(this.data.list);
    this.liste_service.deleteMovie(this.data.list);
    this.dialogRef.close();
  }

}
