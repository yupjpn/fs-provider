import { Rental } from './rental.model';

export class Review {
    public reviewerName: string;
    public rental: Rental;
    public reviewText: string;
    public numOfStars: number;
    public date: string;

    constructor(reviewerName: string, rental: Rental, reviewText: string, numOfStars: number, date: string) {
        this.reviewerName = reviewerName;
        this.rental = rental;
        this.reviewText = reviewText;
        this.numOfStars = numOfStars;
        this.date = date;
    }
}
