import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() addUser: EventEmitter<any> = new EventEmitter();
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
  constructor() {
  }
  user: User = new User();

  ngOnInit() {
    // this.userForm = new FormGroup({
    //   new FormControl(this.user.firstName)
    // });

  }

  onSubmit() {
    console.warn(this.userForm.value);
    const user = this.user;
    console.log(user);
    this.addUser.emit(user);
  }


}
