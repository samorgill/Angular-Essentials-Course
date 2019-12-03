import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodoComponent} from './todo/todo.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {APIService} from './_services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      APIService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
