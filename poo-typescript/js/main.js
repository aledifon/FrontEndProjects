"use strict";
// import { Shirt } from `./shirt.js?v=${Date.now()}`;
// Dynamically import the Shirt module with cache-busting
// The ?v=${Date.now()} query string forces the browser to reload 
// this JS file instead of using cached version
(async () => {
    // Import the module dynamically and await its resolution
    const shirtModule = await import(`./shirt.js?v=${Date.now()}`);
    // Extract the Shirt class from the imported module
    const Hoodie = shirtModule.Hoodie;
    const SimpleShirt = shirtModule.SimpleShirt;
    class Main {
        constructor() {
            console.log('JS Aplication loaded');
            console.log('nuevos datoss');
        }
    }
    var main = new Main();
    var hoodie = new Hoodie('Interface added!', 'Hoodie Class inhertis from Shirt Class', 'TEST3', 'TEST4', 100);
    console.log(hoodie.getModel());
    console.log(hoodie);
    // Call the complex decorator (with param.)
    hoodie.stamping();
    // Call the simple decorator (wo params)
    var simpleShirt = new SimpleShirt();
    simpleShirt.simpleStamping();
})();
