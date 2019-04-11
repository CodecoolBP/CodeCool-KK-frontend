import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/user/users/users.component';
import {UserItemComponent} from './components/user/user-item/user-item.component';
import {AddUserComponent} from './components/user/add-user/add-user.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './components/layout/header/header.component';
import {LoginComponent} from './components/user/login/login.component';
import {TripsComponent} from './components/trip/trips/trips.component';
import {AlertComponent} from './components/alert/alert.component';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserItemComponent,
    AddUserComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    TripsComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    NgbAlertModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
