import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user/user';
import {UserService} from '../../../services/user/user.service';

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
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  giveUser(user: User) {
    console.log(this.userService.addUser(user));
  }

}
