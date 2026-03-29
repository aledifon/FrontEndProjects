'use strict'

$(document).ready(function() {           
    
    var showButton = $('#showButton');
    var hideButton = $('#hideButton');
    var toggleButton = $('#toggleButton');
    var animateButton = $('#animateButton');
    var box = $('#box');

    box.hide();
    showButton.show();
    hideButton.hide();

    // // Showing/Hiding FX with timing
    // showButton.click(function(){
    //     box.show('fast');
    //     showButton.hide();
    //     hideButton.show('normal');
    //     });
    // hideButton.click(function(){
    //     box.hide('fast');
    //     hideButton.hide();
    //     showButton.show('normal');
    //     });

    // Fading FXs with timing
    showButton.click(function(){        
        showButton.hide();
        hideButton.show();

        // box.fadeIn('slow');
        box.fadeTo('slow',1);       // 1st param --> timing; 2nd param --> alpha/transparency
        });
    hideButton.click(function(){
        hideButton.hide();        
        showButton.show();  
              
        // box.fadeOut('slow');
        box.fadeTo('slow',0.2, 
            () => console.log("Box hidden"));       // Is possible to add a callback func. as param
                                                    // to execute a code when the animation ends.
        // box.slideDown('slow');
        // box.slideUp('slow');        
    });

    // Toggle button with toggling FXs (hide/show, fading, )
    toggleButton.click(function(){                            
        // box.toggle('fast');
        box.fadeToggle('fast');
        // box.slideToggle('fast');
    });

    // Animations chaining (animate method)
    animateButton.click(function(){
        box.animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
                }, 'slow')
            .animate({
                borderRadius:'900px',
                marginTop:'80px'
            },'slow')
            .animate({                
                marginLeft:'0px',
                borderRadius:'0px'
            },'slow')
            .animate({                
                borderRadius:'100px',
                marginTop:'0px'
            },'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
                }, 'slow');
        });

});
