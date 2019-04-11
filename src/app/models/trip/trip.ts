import {Station} from '../station/station';

export class Trip {
  price: number;
  journeyStart: string;
  vehicleNumber: number;
  vehicleType: string;
  fromStation: Station;
  success: boolean;
}
