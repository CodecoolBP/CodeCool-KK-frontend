import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication/authentication.service';
import {Observable} from 'rxjs';
import {Trip} from '../../models/trip/trip';

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

  getTrips(): Observable<Trip[]> {
    const user = this.authenticationService.currentUserValue;
    const trips = this.http.get<Trip[]>(environment.apiUrl + '/' + user.email + '/history');
    return trips;
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
