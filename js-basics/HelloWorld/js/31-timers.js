'use strict'

window.addEventListener('load',() => {
    
    function resetInterval(intervalTime)
    {
        let timer = setInterval(() => {        
            console.log("Set interval ejecutado");

            var h1 = document.querySelector("h1");        
            if(h1.style.color == "blue")
                h1.style.color = "green";  
            else
                h1.style.color = "blue";          
        }, intervalTime);

        return timer;
    }

    // Timers. setTimeout(a single time) or setInterval (continuously)
    // var time = setInterval(() => {        
    //     console.log("Set interval ejecutado");

    //     var h1 = document.querySelector("h1");        
    //     if(h1.style.color == "blue")
    //         h1.style.color = "green";  
    //     else
    //         h1.style.color = "blue";          
    // }, 1000);

    var defIntervalTime = 1000;

    var timer = resetInterval(defIntervalTime);

    var stop = document.querySelector("#stopButton");
    var start = document.querySelector("#startButton");

    stop.addEventListener('click',() => {
        alert("You stopped the loop interval");
        clearInterval(timer);
    });
    start.addEventListener('click',() => {
        alert("You started the loop interval");
        timer = resetInterval(defIntervalTime);
    });
});