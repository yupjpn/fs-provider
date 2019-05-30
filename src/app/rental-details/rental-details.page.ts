import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Rental } from '../models/rental.model';
import { RentalService } from '../services/rental.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage implements OnInit {
  private rentalId: number;
  private rentalName: string;
  private currentRental: Rental;

  constructor(
    private activatedRoute: ActivatedRoute, private rentalService: RentalService,
    private navCtrl: NavController) {

      let arrow = (data: any) => {
        this.rentalName = data.params.rentalName;
        this.rentalId = data.params.rentalId;  
  
        console.log(this.rentalName);
        console.log(this.rentalId);
        
        this.currentRental = this.rentalService.findRentalById(this.rentalId);
  
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
