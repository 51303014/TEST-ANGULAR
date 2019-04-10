import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SendContactComponent } from './send-contact/send-contact.component';
import { TopnavComponent } from './topnav/topnav.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {
  DialogContentComponent,
  UploadImageComponent
} from './upload-image/upload-image.component';
import { ProgressComponent } from './progress/progress.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpecialCharactersDirective } from './specialCharacters.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    RouterModule.forChild([{ path: '', component: SendContactComponent }])
  ],
  declarations: [
    SendContactComponent,
    TopnavComponent,
    UploadImageComponent,
    ProgressComponent,
    DialogContentComponent,
    SpecialCharactersDirective
  ],
  entryComponents: [DialogContentComponent]
})
export class UiContactModule {}
