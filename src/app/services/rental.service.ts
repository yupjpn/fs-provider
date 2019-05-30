import { Injectable } from '@angular/core';
import { Rental } from '../models/rental.model';


@Injectable({
  providedIn: 'root'
})

export class RentalService {

  private rentals: Array<Rental>;

  constructor() { 
    this.rentals = new Array<Rental>();
    
    let rental1 = new Rental("Cozy Countryisde Cottage", "Bali, Indonesia", 92,
    "http://thesmartlocal.com//images/easyblog_images/2088/Beautiful%20Homes/Hillside-House-1.jpg", 1);

    let rental2 = new Rental("Oceanfront House", "Cape Town, South Africa", 210,
    "https://www.capsol.co.za/wp-content/uploads/2016/10/cape-town-apartments.jpg", 2); 

    let rental3 = new Rental("Apartment Near City Center", "Manhattan, New York", 187,
    "https://s3.amazonaws.com/zumpermedia/blog/2017/09/charles.jpg", 3); 

    this.rentals.push(rental1);
    this.rentals.push(rental2);
    this.rentals.push(rental3);
  }

  // Returns array of all rentals in program
  getRentals() {
    return this.rentals;
  }

  // Takes in a rental's unique ID and returns corresponding Rental object.
  // If unique ID is not mapped to any Rental object, then return null
  findRentalById(id: number): Rental {
    let foundRental: Rental = null;

    this.rentals.forEach(
      (rental: Rental) => {
        if (rental.getId() == id) {
          foundRental = rental;
          console.log("Found rental");
        }
      }
    );

    return foundRental;
  }
}
