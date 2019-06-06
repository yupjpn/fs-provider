import { Injectable } from '@angular/core';
import { ReviewService } from './review.service';
import { Review } from '../models/review.model';
import { RentalService } from './rental.service';
import { Owner } from '../models/owner.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private owner: Owner;

  constructor(reviewService: ReviewService, rentalService: RentalService) {
    let reviews = Array<Review>();

    this.owner = new Owner("Yuki", "Peters", "yukipeters@yuh.com", "password");
  }

  public setOwner(owner: Owner) {
    this.owner = owner;
  }

  public getOwner() {
    return this.owner;
  }
}
