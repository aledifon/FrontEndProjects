'use strict'

$(document).ready(function() {    
   
    function switchRed() {        
        $(this).css("background","red");
    }
    function switchGreen(){
        $(this).css("background","green");
    }

    // Mouseover and Mouseout
    var box = $('#box');    
    var data = $('#data');

    // Event subscription with arrow function (Not possible to use directly 'this')
    // box.mouseover((e) => {
    //     let _this = $(e.currentTarget);
    //     _this.css("background","red");
    // });

    // Events subscription and implementation with jQuery
    // box.mouseover(switchRed);
    // box.mouseout(switchGreen);

    // Hover (Easier way of mouseOver-Out with jQuery)
    box.hover(switchRed,switchGreen);

    // Click, double-click
    box.click(function(){
        $(this).css("background","blue")
            .css("color","white");
    });
    box.dblclick(function(){
        $(this).css("background","pink")
            .css("color","yellow");
    });

    // Focus & Blur
    var name = $('#name');
    name.focus(function(){
        $(this).css("border","2px solid green");
        data.hide();
    });
    name.blur(function(){
        $(this).css("border","1px solid #ccc");    
        data.text($(this).val()).show();
    });

    // Mouse down and mouse up
    data.mousedown(function(){
        $(this).css("border-color", "gray");
    });
    data.mouseup(function(){
        $(this).css("border-color", "black");
    });
        
    // Mousemove
    var circle = $('#followMe');
    $(document).mousemove(function(e){
        $('body').css("cursor","none");
        console.log("X: " + e.clientX +" Y: " + e.clientY);
        circle.
            css("left",e.clientX).
            css("top",e.clientY);
    });
});
