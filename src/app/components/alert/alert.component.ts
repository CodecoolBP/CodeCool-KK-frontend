import {Component, OnInit} from '@angular/core';

class Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  private hasAlert: boolean;
  private alert: Alert = new Alert();

  constructor() {
  }

  ngOnInit() {
    this.add('Welcome on site', 'success');
  }

  private close() {
    this.hasAlert = false;
  }

  public add(message: string, type: string) {
    this.alert.type = type;
    this.alert.message = message;
    this.hasAlert = true;
  }
}
