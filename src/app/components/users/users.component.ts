import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  addUser(user: User) {
    this.userService.addUser(user).subscribe(user => {
      this.users.push(user);
    });
  }

}
