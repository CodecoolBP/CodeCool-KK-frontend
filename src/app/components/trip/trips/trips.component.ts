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
    const trip1 = new Trip();
    trip1.price = 1;
    trip1.success = true;
    trip1.vehicleType = 'metro';
    trip1.vehicleNumber = 22;
    trip1.fromStation = 'Deák';
    trip1.journeyStart = '2018.01.01';
    const trip2 = new Trip();
    trip2.price = 1;
    trip2.success = false;
    trip2.vehicleType = 'metro';
    trip2.vehicleNumber = 22;
    trip2.fromStation = 'Deák';
    trip2.journeyStart = '2018.01.01';
    this.trips = [trip1, trip2];
  }

}
