import {Component, OnInit} from '@angular/core';
import {Trip} from '../../../models/trip/trip';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  trips: Trip[];

  constructor() {
  }

  ngOnInit() {
  }

}
