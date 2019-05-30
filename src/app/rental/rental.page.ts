import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.page.html',
  styleUrls: ['./rental.page.scss'],
})
export class RentalPage implements OnInit {

  constructor(private navCtlr: NavController) { }

  ngOnInit() {
  }

  navBackExistingRentals() {
    this.navCtlr.navigateForward("main/tabs/tab1");
  }

}
