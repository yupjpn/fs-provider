import { Injectable } from '@angular/core';
import { Rental } from '../models/rental.model';


@Injectable({
  providedIn: 'root'
})

export class RentalService {

  public rentals: Array<Rental>;

  constructor() { 
    this.rentals = new Array<Rental>();
  }

}
