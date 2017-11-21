$('#about').on('mouseover',function(){
  $('#about').addClass('highlighted');
})
$('#about').on('mouseleave',function(){
  $('#about').removeClass('highlighted');
});

$('#yoface').hover(function(){
  $('#hiddenblurb').slideDown();
});

$('#yoface').on('mouseleave',function(){
  $('#yoface').animate({width: "15%"});
})
$('#yoface').on('click',function(){
  $('#yoface').animate({width: "25%"});
});
$('#name').hover(function(){
  $(this).css({
    "color": "purple"
  });
})
$('#name').mouseleave(function(){
  $(this).css({
    "color": "skyblue"
  });
});
var key = ""
$(document).keypress(function(event){
  key = key + event.key;
  $('#hiddenblurb').text("You pressed         " + key).show()
})
