import { Injectable } from '@angular/core';
import { Review } from '../models/review.model';
import { RentalService } from './rental.service';
import { OwnerService } from './owner.service';
import { Owner } from '../models/owner.model';

@Injectable({
  providedIn: 'root'
})

export class ReviewService {

  private owner: Owner; 
  private reviews: Array<Review>;

  constructor(rentalService: RentalService) {
    this.reviews = new Array<Review>();

    let review1 = new Review("John", rentalService.getRentals()[0], "Amazing place!", 4, "May 2019");
    let review2 = new Review("Nick", rentalService.getRentals()[1], "Great place!", 5, "April 2019");
    let review3 = new Review("Julian", rentalService.getRentals()[2], "Wonderful place!", 5, "January 2019");

    this.reviews.push(review1);
    this.reviews.push(review2);
    this.reviews.push(review3);
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
