'use strict'

$(document).ready(function() {       

    // Vars
    var a = $('a');
    var addButton = $('#addButton');
    var addLink = $('#addLink');
    var list = $('#list');

    // More compact sintaxis
    function reloadLinks(){
        a = $('a');                             // Update all the a refs.
        a.each(function(idx){                   // jQuery foreach func.
            let _this = $(this);        

            _this.attr('target','_blank');      // Add the target attribute with the '_blank' value         

            _this.text(_this.attr('href'));     // Set the 'href' value as the content of
                                                //  each 'a' html elem.
            });
    }

    // Longer sintaxis
//    var elemList = $('li');   
//    for(let idx in elemList) {
//         elemList.eq(idx).text(elemList.eq(idx).find('[href]').eq(0).attr('href'));
//         console.log(elemList.eq(idx).text());
//    };   

    reloadLinks();
    
    // removeAttr --> Remove attributes;  
    addButton
        .removeAttr('disabled')
        .click(function(){             
        list.append('<li><a href="' + addLink.val() + '">Test</a></li>');        
        reloadLinks();
        addLink.val('');
        });

});
