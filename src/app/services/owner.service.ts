import { Injectable } from '@angular/core';
import { ReviewService } from './review.service';
import { Review } from '../models/review.model';
import { RentalService } from './rental.service';
import { Owner } from '../models/owner.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  public owner: Owner;

  constructor() {
    this.owner = new Owner("", "", "", "");
  }

}
