import {Component, OnInit} from '@angular/core';
import {Trip} from '../../../models/trip/trip';
import {TripService} from '../../../services/trip/trip.service';
import {Station} from '../../../models/station/station';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  trips: Trip[] = [];
  station: Station = new Station();

  constructor(private tripService: TripService) {
  }

  ngOnInit() {
    this.tripService.getTrips().subscribe(trip => {
        trip.forEach(t => {
          this.trips.push(t);
        });
      }
    );
  }
}
