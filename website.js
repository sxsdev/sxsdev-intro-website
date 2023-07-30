$(document).ready(function(){
    $('.fancy').hover(function(){
        // remove fadein class from all words
        $('#text .word').removeClass('fadein');

        // Add fadeout class to all .word elements
        $('#text .word').addClass('fadeout');
        
        // Remove fadeout class from this .fancy element
        $(this).removeClass('fadeout');
    }, function(){
        // Remove fadein class from all .word elements
        $('#text .word').addClass('fadein');
    });
});
