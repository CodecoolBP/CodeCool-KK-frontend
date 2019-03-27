import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models/user/user';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  submitted = false;
  loading = false;
  userForm: FormGroup;

  get formControls() {
    return this.userForm.controls;
  }

  constructor(private userService: UserService,
              private formBuilder: FormBuilder) {
  }

  user: User = new User();

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      discount: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    const user: User = this.userForm.value;
    this.userService.addUser(user);
  }
}
