import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserItemComponent} from './components/user-item/user-item.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './components/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserItemComponent,
    AddUserComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
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
