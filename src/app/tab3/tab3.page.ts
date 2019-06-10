import { Component } from '@angular/core';
import { Rental } from '../models/rental.model';
import { Review } from '../models/review.model';
import { Owner } from '../models/owner.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  public owner: Owner;
  // public reviews: Array<Review>;

  constructor(private httpClient: HttpClient) { 
    // HAVE TO GET OWNER HERE BY QUERY
    const ownerId = localStorage.getItem("owner_id");

    this.httpClient.get("http://localhost:3000/api/owners/" + ownerId).subscribe(
      (response: any) => {
        console.log(response);

        this.owner = new Owner(response.owner.firstName, response.owner.lastName,
          response.owner.email, response.owner.password);
      }
    );
  }

}
