import { Rental } from './rental.model';
import { Review } from './review.model';

export class Owner {
    private firstName: string;
    private lastName: string;
    private location: string;
    private joinYear: number;
    private email: string;
    private phoneNumber: string;

    constructor(firstName: string, lastName: string, location: string, joinYear: number, email: string, phoneNumber: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
        this.joinYear = joinYear;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public setFirstName(firstName: string) {
        this.firstName = this.firstName;
    }

    public setLastName(lastName: string) {
        this.lastName = this.lastName;
    }

    public setLocation(location: string) {
        this.location = location;
    }

    public setJoinYear(joinYear: number) {
        this.joinYear = joinYear;
    }

    public setEmail(email: string) {
        this.email = email;
    }

    public setPhoneNumber(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }

    public getFirstName() {
        return this.firstName;
    }

    public getLastName() {
        return this.lastName;
    }

    public getLocation() {
        return this.location;
    }

    public getJoinYear() {
        return this.joinYear;
    }

    public getEmail() {
        return this.email;
    }

    public getPhoneNumber() {
        return this.phoneNumber;
    }

}