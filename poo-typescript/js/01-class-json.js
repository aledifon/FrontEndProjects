'use strict'

// Javascript Object
var bike = {
    color: 'Red',
    model: 'BMX',
    brakes: 'disc',
    maxSpeed: '60km',
    changeColor: function(newColor){
        // bike.color = newColor;
        this.color = newColor;
        console.log(this);
        }
};

bike.changeColor('blue');
