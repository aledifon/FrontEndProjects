// Interface
interface ShirtBase{
    setColor(color:string):void;
    getColor():string;
}

// ----------------------
// Decorator WITHOUT parameters (simpler case)
// ----------------------
/*
  This decorator does not take any arguments.
  It directly receives the class as 'target'.
*/
function simpleStamp(target: Function) {
    // Add a method to the class prototype
    target.prototype.simpleStamping = function(): void {
        console.log("Stamped shirt (simple decorator)");
    }
}

// Apply the simple decorator
@simpleStamp
export class SimpleShirt {
    constructor(public color: string) {}
}

// ----------------------
// Decorator with parameter
// ----------------------
/*
  This is a **decorator factory**: a function that returns a decorator.
  - It receives a parameter 'logo' (string)
  - Returns a function that will be used as the class decorator
*/
// Decorator ()
function stamp(logo:string){
    // This returned function is the actual decorator
    // 'target' represents the class being decorated
    return function(target: Function){
        // Add a new method 'stamping' to the class prototype
        // All instances of the class will now have this method
        target.prototype.stamping = function():void{
            console.log("Stamped shirt with the logo: " + logo);
        }
    }
}

// Class ('implements ShirtBase' equivalent to ': ShirtBase' on C#)
@stamp('Gucci')     // Apply decorator with parameter
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

// decoratorName → name of the decorator used with @decoratorName
// target → the class being decorated (constructor)
// target.prototype → used to add methods to all instances
// methodName → method added dynamically to the class

// function decoratorName(target: Function) {
//     target.prototype.methodName = function(): void {
//         // code executed when method is called
//     }
// }

// var shirt = new Shirt('red','long sleeves','nike','L',14);
// shirt.setColor("red");
// // shirt.getColor();

// var longShirt = new Shirt('blue','hoodie','reebok','M',30);
// longShirt.setColor('blue');

// console.log('I am implementing an interface!');
// console.log('Hoodie Class inhertis from Shirt Class');