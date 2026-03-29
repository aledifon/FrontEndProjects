'use strict'

$(document).ready(() => {
    
    var element = $('.element');

    // Moving element by the page
    element.draggable();

    // Resize
    element.resizable();

    // Select and sort elements
    // $('.selectableList').selectable();
    $('.selectableList').sortable({
        update: function(event, ui){
            console.log("The list has changed");
            }
    });

    // Drop
    $('#elementMoved').draggable();     // The element to drag
    $('#area').droppable({              // The element where the to drop the draggable element.
        drop: function(){
                console.log("You dropped something inside of the area");
            }
        });

    // Effects
    $('#show').click(function(){
            // $('.box-effects').toggle("explode");
            // $('.box-effects').toggle("blind");
            // $('.box-effects').toggle("slide");
            // $('.box-effects').toggle("drop");
            // $('.box-effects').toggle("fold");
            // $('.box-effects').toggle("puff");
            // $('.box-effects').toggle("scale");
            // $('.box-effects').toggle("shake");
            $('.box-effects').toggle("shake", 'normal');
        })    

    // Tooltip
    $(document).tooltip();

    // Dialog
    $('#launch-Popup').click(() => $('#popup').dialog());    

    // Datepicker
    $('#calendar').datepicker();

    // Tabs
    $('#tabs').tabs();

});