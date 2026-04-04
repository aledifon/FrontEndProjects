// Interface
interface ShirtBase{
    setColor(color:string):void;
    getColor():string;
}

// Class ('implements ShirtBase' equivalent to ': ShirtBase' on C#)
class Shirt implements ShirtBase{
    // Properties
    private color: string;
    protected model: string;
    private brand: string;
    private size: string;
    private price: number;    

    // Methods 
    public setColor(color:string){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }

    // Class Constructor
    constructor(color:string, model:string, brand:string, 
            size:string, price:number){
        this.color = color;
        this.model = model;
        this.brand = brand;
        this.size = size;
        this.price = price;
    }
}

// Child class ('extend Shirt' equivalent to ': Shirt' on C#)
export class Hoodie extends Shirt{
    public getModel(){
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