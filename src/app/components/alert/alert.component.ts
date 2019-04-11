import {Component, OnInit} from '@angular/core';
import {NgbdAlert} from '../../models/ngbd-alert/ngbd-alert';
import {AlertService} from '../../services/alert/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  public alert: NgbdAlert;

  constructor(
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.alertService.change.subscribe(nextAlert => {
      this.alert = nextAlert;
      }
    );
  }

  private close() {
    this.alertService.remove();
  }

}
