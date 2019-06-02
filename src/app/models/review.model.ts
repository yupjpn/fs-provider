import { Rental } from './rental.model';
import { Owner } from './owner.model';

export class Review {
    private reviewerName: string;
    private rental: Rental;
    private reviewText: string;
    private numOfStars: number;
    private date: string;

    constructor(reviewerName: string, rental: Rental, reviewText: string, numOfStars: number, date: string) {
        this.reviewerName = reviewerName;
        this.rental = rental;
        this.reviewText = reviewText;
        this.numOfStars = numOfStars;
        this.date = date;
    }

    public setReviewerName(reviewerName: string) {
        this.reviewerName = reviewerName;
    }

    public setRental(rental: Rental) {
        this.rental = rental;
    }

    public setReviewText(reviewText: string) {
        this.reviewText = reviewText;
    }

    public setNumOfStars(numOfStars: number) {
        this.numOfStars = numOfStars;
    }

    public setDate(date: string) {
        this.date = date;
    }

    public getReviewerName() {
        return this.reviewerName;
    }

    public getRental() {
        return this.rental;
    }

    public getReviewText() {
        return this.reviewText;
    }
    public getNumOfStars() {
        return this.numOfStars;
    }

    public getDate() {
        return this.date;
    }
}
