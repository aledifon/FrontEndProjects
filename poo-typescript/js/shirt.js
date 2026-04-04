var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
// ----------------------
// Decorator WITHOUT parameters (simpler case)
// ----------------------
/*
  This decorator does not take any arguments.
  It directly receives the class as 'target'.
*/
function simpleStamp(target) {
    // Add a method to the class prototype
    target.prototype.simpleStamping = function () {
        console.log("Stamped shirt (simple decorator)");
    };
}
// Apply the simple decorator
let SimpleShirt = (() => {
    let _classDecorators = [simpleStamp];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var SimpleShirt = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            SimpleShirt = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        color;
        constructor(color) {
            this.color = color;
        }
    };
    return SimpleShirt = _classThis;
})();
export { SimpleShirt };
// ----------------------
// Decorator with parameter
// ----------------------
/*
  This is a **decorator factory**: a function that returns a decorator.
  - It receives a parameter 'logo' (string)
  - Returns a function that will be used as the class decorator
*/
// Decorator ()
function stamp(logo) {
    // This returned function is the actual decorator
    // 'target' represents the class being decorated
    return function (target) {
        // Add a new method 'stamping' to the class prototype
        // All instances of the class will now have this method
        target.prototype.stamping = function () {
            console.log("Stamped shirt with the logo: " + logo);
        };
    };
}
// Class ('implements ShirtBase' equivalent to ': ShirtBase' on C#)
let Shirt = (() => {
    let _classDecorators = [stamp('Gucci')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Shirt = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Shirt = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
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
    };
    return Shirt = _classThis;
})();
// Child class ('extend Shirt' equivalent to ': Shirt' on C#)
export class Hoodie extends Shirt {
    getModel() {
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
