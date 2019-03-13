import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddUserComponent} from './components/add-user/add-user.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
