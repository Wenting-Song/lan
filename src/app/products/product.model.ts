export class Product {
    public name: string;
    public price: number;
    public description: string;
    public imagePath: string;

    constructor(name: string, price: number, desc: string, imagePath: string) {
    this.name = name;
    this.price = price;
    this.description = desc;
    this.imagePath = imagePath;
    }
// tslint:disable-next-line:eofline
}