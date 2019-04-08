import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
export class TripService {

  constructor(private authenticationService: AuthenticationService, private http: HttpClient, private router: Router) {

  }

  getTrips() {
    this.http.post(environment.apiUrl + '/user/add', this.authenticationService.currentUser, httpOptions)
      .subscribe(response => {
        this.router.navigate(['/login']);
        // todo: different response from backend!
        alert(response[ 'message' ]);
      }, (error) => {
        console.log(error);
        // todo: error handling
      });


  }

}
