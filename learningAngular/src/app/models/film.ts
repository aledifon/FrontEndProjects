export class Film{    

    // Parameter properties: automatically create and 
    // initialize class properties from constructor parameters
    constructor(
        public id: number,
        public title: string,
        public gender: string = "",
        public director: string = "",
        public year: number = 2030,
        public platform: string = "",
        public payable: boolean = false
    ){}
}