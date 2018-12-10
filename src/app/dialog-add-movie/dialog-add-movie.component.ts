import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../list-data/List';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-dialog-add-movie',
  templateUrl: './dialog-add-movie.component.html',
  styleUrls: ['./dialog-add-movie.component.css']
})
export class DialogAddMovieComponent implements OnInit {

  actualUser: string;

  constructor(
    public dialogRef: MatDialogRef<DialogAddMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public user: UserServiceService) {
      this.actualUser = this.user.getCredentials();
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  isVoid () : boolean {
    return this.data.listes == undefined;
  }

}
