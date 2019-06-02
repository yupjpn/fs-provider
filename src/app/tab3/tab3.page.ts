import { Component } from '@angular/core';
import { Rental } from '../models/rental.model';
import { RentalService } from '../services/rental.service';
import { Review } from '../models/review.model';
import { ReviewService } from '../services/review.service';
import { Owner } from '../models/owner.model';
import { OwnerService } from '../services/owner.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  private owner: Owner;
  private reviews: Array<Review>;

  constructor(ownerService: OwnerService, reviewService: ReviewService) { 
    this.owner = ownerService.getOwner();
    this.reviews = reviewService.getReviews();
  }

  public setOwner(owner: Owner) {
    this.owner = owner;
  }

  public setReviews(reviews: Array<Review>) {
    this.reviews = reviews;
  }

  public getOwner() {
    return this.owner;
  }

  public getReviews() {
    return this.reviews;
  }

}
