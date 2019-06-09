export class Rental {
    private name: string;
    private location: string;
    private price: number;
    private imageLink: string;
    private owner_id: number;
    private id: number;

    constructor(name: string, location: string, price: number, imageLink: string, id: number, owner_id: number) {
        this.name = name;
        this.location = location;
        this.price = price;
        this.imageLink = imageLink;
        this.id = id;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setLocation(location: string) {
        this.location = location;
    }

    public setPrice(price: number) {
        this.price = price;
    }

    public setImageLink(imageLink: string) {
        this.imageLink = imageLink;
    }

    public setId(id: number) {
        this.id = id;
    }

    public setOwnerId(owner_id: number) {
        this.owner_id = owner_id;
    }
 
    public getName() {
        return this.name;
    }

    public getLocation() {
        return this.location;
    }

    public getPrice() {
        return this.price;
    }   

    public getImageLink() {
        return this.imageLink;
    }   

    public getId() {
        return this.id;
    }   

    public getOwnerId() {
        return this.owner_id;
    }   
}