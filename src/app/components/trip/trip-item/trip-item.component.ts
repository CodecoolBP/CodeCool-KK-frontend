import {Component, Input, OnInit} from '@angular/core';
import {Trip} from '../../../models/trip/trip';

@Component({
  selector: 'app-trip',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.css']
})
export class TripItemComponent implements OnInit {
  @Input() trip: Trip;

  constructor() { }

  ngOnInit() {
  }

}
