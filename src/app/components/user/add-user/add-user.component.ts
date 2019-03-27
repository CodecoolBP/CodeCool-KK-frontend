import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models/user/user';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    password: new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.required,
    ])),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    discount: new FormControl('', Validators.required)
  });

  constructor(private userService: UserService) {
  }

  user: User = new User();

  ngOnInit() {
    // this.userForm = new FormGroup({
    //   new FormControl(this.user.firstName)
    // });

  }

  onSubmit() {
    const user: User = this.userForm.value;
    console.log(this.userService.addUser(user));
  }


}
