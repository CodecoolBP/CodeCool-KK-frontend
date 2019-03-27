import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AddUserComponent} from './components/user/add-user/add-user.component';
import {LoginComponent} from './components/user/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: AddUserComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
