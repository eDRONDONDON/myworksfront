$('.skillbar').each(function(){
  $(this).children('.skillbar-bar').animate({
    width:$(this).attr("value")
  }, 3500);
})
