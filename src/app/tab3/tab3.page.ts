import { Component } from '@angular/core';
import { Rental } from '../models/rental.model';
import { Review } from '../models/review.model';
import { Owner } from '../models/owner.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  public owner: Owner;
  public reviews: Array<Review>;

  constructor() { 
    // HAVE TO GET OWNER HERE BY QUERY
    
  }

}
