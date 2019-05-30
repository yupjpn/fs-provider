export class Rental {
    private rentalName: string;
    private location: string;
    private pricePerNight: number;
    private imageLink: string;

    constructor(rentalName: string, location: string, pricePerNight: number, imageLink: string) {
        this.rentalName = rentalName;
        this.location = location;
        this.pricePerNight = pricePerNight;
        this.imageLink = imageLink;
    }

    public setRentalName(rentalName: string) {
        this.rentalName = rentalName;
    }

    public setLocation(location: string) {
        this.location = location;
    }

    public setPricePerNight(pricePerNight: number) {
        this.pricePerNight = pricePerNight;
    }

    public setImageLink(imageLink: string) {
        this.imageLink = imageLink;
    }
 
    public getRentalName() {
        return this.rentalName;
    }

    public getLocation() {
        return this.location;
    }

    public getPricePerNight() {
        return this.pricePerNight;
    }   

    public getImageLink() {
        return this.imageLink;
    }   

}