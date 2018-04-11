$(function(){
    $(' .dropdownMenu > li').click(function(){
        $(this).children("ul").slideToggle(200);
    })
})

$(function(){
    $('.dropdownMenu > li').mouseover( function() {
        $(this).css('color', '#00cc00');
    })
    $('.dropdownMenu > li').mouseleave( function() {
        $(this).css('color', '#FFF');
    })
})

$(function(){
    $('.dropdownMenu > li').click( function() {
        $(this).css('color', '#FFF');
    })
})