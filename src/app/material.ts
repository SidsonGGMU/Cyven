/**
 * The only purpose of this file is to help us keep the project clean and not overloaded.
 * Please put all your material components' imports inside this file.
 */
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatAutocompleteModule,
  MatTableModule,
  MatListModule,
  MatDialogModule,
  MatSelectModule,
  MatSliderModule,
  MatChipsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatAutocompleteModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    MatSliderModule,
    MatChipsModule
  ],
  exports: [
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    MatSliderModule,
    MatChipsModule
  ]
})
export class MaterialModule {}