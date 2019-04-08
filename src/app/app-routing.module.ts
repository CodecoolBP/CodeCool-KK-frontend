import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AddUserComponent} from './components/user/add-user/add-user.component';
import {LoginComponent} from './components/user/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {TripsComponent} from './components/trip/trips/trips.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'history', component: TripsComponent, canActivate: [AuthGuard]},
  { path: 'register', component: AddUserComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
