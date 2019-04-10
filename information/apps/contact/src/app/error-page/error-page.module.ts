import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: ':code', component: ErrorPageComponent }])
  ],
  declarations: [ErrorPageComponent]
})
export class ErrorPageModule {}
