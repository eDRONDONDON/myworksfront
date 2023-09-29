$('#hideBtn').click(function(event){
  $('body').append('<form></form>');
  $('form').append('<input type="text" id="diametr" value=""> ');
  $('form').append('<input type="text" id="color" value=""> ');
  $(this).remove();
  $('body').append('<button onclick="drawCircle()" type="button"> Нарисовать </button>');
});

function drawCircle() {
  $('body').append('<div>  </div>').width($("input[id='diametr']").val());
  $('div').height($("input[id='diametr']").val());
  $('div').css('backgroundColor', $("input[id='color']").val());
};
