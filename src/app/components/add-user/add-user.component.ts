import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  firstName: string;
  lastName: string;

  ngOnInit() {
  }

  onSubmit() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
    };
  }

}
