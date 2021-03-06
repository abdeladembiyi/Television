import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatMenuModule
  , MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatTableModule,
  MatPaginatorModule, MatSortModule,
  MatSidenavModule, MatListModule, MatDatepickerModule,
  NativeDateModule, MatNativeDateModule, MatCheckboxModule, MatSelectModule,
  MatDialogModule, MatGridListModule, MatRadioModule, MatAutocompleteModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatGridListModule,
    MatRadioModule,
    MatAutocompleteModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatGridListModule,
    MatRadioModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule { }
