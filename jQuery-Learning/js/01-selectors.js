'use strict'

$(document).ready(function() {    
    // ID Selectors
    var red = $("#red").
        css("background","red").
        css("color","white");    

    $("#yellow").
        css("background","yellow").
        css("color","green");

    $("#green").
        css("background","green").
        css("color","white");

    // Class selectors
    var my_class = $('.zebra').css("padding", "5px");        

    $(".no_border").click(function(){
        $(this).addClass('zebra');
    });

    // Label selectors
    var paragraph = $('p').css('cursor', 'pointer');

    paragraph.click(function() {
        var _this = $(this);
        if(!_this.hasClass('big'))
            _this.addClass('big');
        else
            _this.removeClass('big');
        });

    // Atributes selectors
    $('[title="Google"]').css('background','#ccc');
    $('[title="Facebook"]').css('background','blue');

    // Others (',' Works as a logic 'OR' selects al 'p' and 'a' labels)
    //$('p, a').addClass('upper-margin');

    // Find all elems which has the 'highlighted' class and 
    // belongs to the elem with the 'box' id
    // var search0 = $('#box').find('.highlighted');
    // console.log(search0);
    // var search1 = $('#box .highlighted');                    // Same thing on alternative way
    // console.log(search1);

    // parent() allows coming back upper on the HTML hierarchy
    // var search2 = $('#box .highlighted').parent().parent().find('[title="Google"]'); 
    // console.log(search2);
    
    var search3 = $('#element2').parent().parent().find('.highlighted'); 
    console.log(search3);
});
