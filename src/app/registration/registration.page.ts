import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public owner: any = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  }

  constructor(private httpClient: HttpClient, private navCtrl: NavController) {}

  submit() {
    console.log("Submitting to the server...");
    console.log(this.owner);

    this.httpClient.post("http://localhost:3000/api/owners", this.owner).subscribe(
      (response) => {
        console.log(response);
      }
    );

    this.navToTabs();

  }  

  navToTabs() {
    this.navCtrl.navigateForward('main/tabs/tab1');
  }

  ngOnInit() {
  }

}
