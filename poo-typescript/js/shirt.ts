// Class (It should be called as the file)
class Shirt{
    // Properties
    private color: string;
    private model: string;
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

}

var shirt = new Shirt();

shirt.setColor("red");
shirt.model = "t-shirt";
shirt.brand = "nike";
shirt.size = "L";
shirt.price = 10;

var longShirt = new Shirt();
longShirt.color = "bluee";
longShirt.model = "long-shirt";
longShirt.brand = "reebok";
longShirt.size = "XL";
longShirt.price = 30;

console.log(longShirt);