import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Rental } from '../models/rental.model';
import { RentalService } from '../services/rental.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage implements OnInit {
  private rentalId: number;
  private currentRental: Rental = new Rental("", "", 0, "", 0);

  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController,
    private httpClient: HttpClient) {

      let arrow = (data: any) => {
        this.rentalId = data.params.rentalId;  
  
        console.log(this.rentalId);
        
        // this.currentRental = this.rentalService.findRentalById(this.rentalId);
        
        this.httpClient.get("http://localhost:3000/api/properties/propertyId/" + this.rentalId).subscribe(
          (response: any) => {
            console.log("Response from query:");
            console.log(response);
    
            // setting rentals array here equal to the array of properties
            // returned by the query
            this.currentRental = response.rental;
          }
        );

        if (! this.currentRental) {
          alert("Rental not found!");
          this.navCtrl.navigateBack("main/tabs/tab1");
        }
      
      };
  
      this.activatedRoute.queryParamMap.subscribe(arrow);
    }

  ngOnInit() {
  }
}
