// Class ('implements ShirtBase' equivalent to ': ShirtBase' on C#)
class Shirt {
    // Properties
    color;
    model;
    brand;
    size;
    price;
    // Methods 
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    // Class Constructor
    constructor(color, model, brand, size, price) {
        this.color = color;
        this.model = model;
        this.brand = brand;
        this.size = size;
        this.price = price;
    }
}
// Child class ('extend Shirt' equivalent to ': Shirt' on C#)
export class Hoodie extends Shirt {
    getModel() {
        return this.model;
    }
}
// var shirt = new Shirt('red','long sleeves','nike','L',14);
// shirt.setColor("red");
// // shirt.getColor();
// var longShirt = new Shirt('blue','hoodie','reebok','M',30);
// longShirt.setColor('blue');
console.log('I am implementing an interface!');
console.log('Hoodie Class inhertis from Shirt Class');
