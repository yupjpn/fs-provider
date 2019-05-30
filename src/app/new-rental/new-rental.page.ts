import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-rental',
  templateUrl: './new-rental.page.html',
  styleUrls: ['./new-rental.page.scss'],
})
export class NewRentalPage implements OnInit {

  constructor(private navCtlr: NavController) { }

  ngOnInit() {
  }

  navBackExistingRentals() {
    this.navCtlr.navigateForward("main/tabs/tab1");
  }

}

