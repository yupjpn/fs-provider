export class Rental {
    private rentalName: string;
    private location: string;
    private pricePerNight: number;
    private imageLink: string;
    private id: number;

    constructor(rentalName: string, location: string, pricePerNight: number, imageLink: string, id: number) {
        this.rentalName = rentalName;
        this.location = location;
        this.pricePerNight = pricePerNight;
        this.imageLink = imageLink;
        this.id = id;
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

    public setId(id: number) {
        this.id = id;
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

    public getId() {
        return this.id;
    }   
}