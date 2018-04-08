$(function(){
    $(' .dropdownMenu > li').click(function(){
        $(this).children("ul").slideToggle(200);
    })
})