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

    let review1 = new Review("John", rentalService.getRentals()[0], 
    "We had a great time at Yuki's place. The communication was super easy and quick and the place looks exactly like it does on the pictures. The neighborhood is very conveniently located and although it’s a lively neighborhood the apartment is very quiet! Would absolutely recommend to stay there!", 
    4, "May 2019");
    let review2 = new Review("Nick", rentalService.getRentals()[1], "Yuki's place is at a perfect location, very easy to get around with public transportation and walking distance to awesome bars and restaurants. His place is great, very clean and has everything you need. Yuki was also very helpful since the beginning, available at all times whenever I had any questions. Totally recommend it.", 
    5, "April 2019");
    let review3 = new Review("Julian", rentalService.getRentals()[2], "The apartment is very nice and comfortable! Location is very convenient, near shops and public transport. Yuki was very helpful and friendly, he’s a super host!",
    5, "January 2019");

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
