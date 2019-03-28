import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user/user';
import {environment} from '../../../environments/environment.prod';
import {Router} from '@angular/router';

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

  // usersUrl = 'http://192.168.160.180:8080/user';

  constructor(private http: HttpClient, private router: Router) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '/user/list');
  }

  addUser(user: User) {
    this.http.post(this.apiUrl + '/user/add', user, httpOptions)
      .subscribe(response => {
        this.router.navigate(['/login']);
        // todo: different response from backend!
        alert(response['message']);
      }, (error) => {
        console.log(error);
        // todo: error handling
      });
  }

}
