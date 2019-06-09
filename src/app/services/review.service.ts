import { Injectable } from '@angular/core';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})

export class ReviewService {

  public reviews: Array<Review>;

  constructor() {
    this.reviews = new Array<Review>();
  }

}
