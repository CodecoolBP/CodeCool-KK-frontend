import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user/user';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {AlertService} from '../alert/alert.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router, private alertService: AlertService) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '/user/list');
  }

  addUser(user: User) {
    this.http.post(this.apiUrl + '/user/add', user, httpOptions)
      .subscribe(response => {
        this.router.navigate(['/login']);
        // @ts-ignore
        this.alertService.addAlert(`User created with email: ${response.email}`, 'success');
      }, (error) => {
        this.alertService.addAlert(error.valueOf().error, 'danger');
      });
  }

}
