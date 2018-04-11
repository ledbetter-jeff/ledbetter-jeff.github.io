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
        $(this).css('color', 'rgb(0, 0, 0)');
    })
})

$(function(){
$('.dropdownMenu > li').click( function() {
    $(this).css('color', 'rgb(0, 0, 0)');
})
})

// function toggleDiv(divId) {
//     $("#"+divId).toggle();
// }

// function toggleList() {
//     document.getElementById("toggleList").classList.toggle("hide");
// }

