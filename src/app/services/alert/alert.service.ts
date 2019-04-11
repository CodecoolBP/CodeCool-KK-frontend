import {EventEmitter, Injectable, Output} from '@angular/core';
import {NgbdAlert} from '../../models/ngbd-alert/ngbd-alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  ngbdAlert: NgbdAlert;

  constructor() {
  }

  @Output() change: EventEmitter<NgbdAlert> = new EventEmitter();

  public addAlert(message: string, type: string) {
    this.ngbdAlert = new NgbdAlert();
    this.ngbdAlert.type = type;
    this.ngbdAlert.message = message;
    this.change.emit(this.ngbdAlert);
  }

  public remove() {
    this.ngbdAlert = null;
    this.change.emit(this.ngbdAlert);
  }
}
