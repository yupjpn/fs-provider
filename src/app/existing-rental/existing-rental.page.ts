import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Rental } from '../models/rental.model';


@Component({
  selector: 'app-existing-rental',
  templateUrl: './existing-rental.page.html',
  styleUrls: ['./existing-rental.page.scss'],
})
export class ExistingRentalPage implements OnInit {
  private existingRentals: Array<Rental>;
  private currentRental: Rental;
  private rentalId: number;
  private rentalName: string;

  constructor(private activatedRoute: ActivatedRoute) { 
    let rental1 = new Rental("Comfy Cottage in Singapore", "Singapore, Singapore", 99, "https://upload.wikimedia.org/wikipedia/commons/4/4f/Singapore_Cottage%2C_Collingwood.jpg", 1);
    let rental2 = new Rental("Gigantic House Near Duke", "Durham, North Carolina", 60, "https://upload.wikimedia.org/wikipedia/commons/7/7a/JOHN_SPRUNT_HILL_HOUSE%2C_DURHAM_COUNTY.JPG", 2);

    this.existingRentals = new Array<Rental>();
    this.existingRentals.push(rental1);
    this.existingRentals.push(rental2);
  }

  ngOnInit() {
    let arrow = (data: any) => {
      this.rentalName = data.params.rentalName;
      this.rentalId = data.params.rentalId;

      // Find the right rental by ID
      this.existingRentals.forEach(
        (rental: Rental) => {
          if (rental.getId() == this.rentalId) {
            // Display this rental
            this.currentRental = rental;
          }
        }
      )
    };

    this.activatedRoute.queryParamMap.subscribe(arrow);

  }

}
