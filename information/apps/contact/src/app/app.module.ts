import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ContactDataService } from '@contact/ui-contact';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ContactDataService, {
      dataEncapsulation: false
    }),
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'contact',
          pathMatch: 'full'
        },
        {
          path: 'error',
          loadChildren: './error-page/error-page.module#ErrorPageModule'
        },
        {
          path: 'contact',
          loadChildren: '@contact/ui-contact#UiContactModule'
        },
        {
          path: '**',
          redirectTo: 'error/404'
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [ContactDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
