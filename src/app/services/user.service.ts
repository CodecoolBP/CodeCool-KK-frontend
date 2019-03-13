import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // localhost
  usersUrl = 'http://192.168.160.180:8080/user';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl + '/list');
  }

  addUser(user: User) {
    this.http.post(this.usersUrl + '/add', user, httpOptions)
      .subscribe(response => {
        console.log(response);
      });
  }
}
