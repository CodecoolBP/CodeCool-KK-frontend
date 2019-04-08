import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication/authentication.service';
import {User} from '../../models/user/user';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private authenticationService: AuthenticationService, private http: HttpClient, private router: Router) {

  }

  getTrips(): Observable<User[]> {
    const currentUser = this.authenticationService.currentUser;
    return this.http.get<User[]>(environment.apiUrl + (currentUser as unknown as User).email + '/history');
      // .subscribe(response => {
      //   this.router.navigate(['/login']);
      //   // todo: different response from backend!
      //   alert(response[`message`]);
      // }, (error) => {
      //   console.log(error);
      //   // todo: error handling
      // });

  }

}
