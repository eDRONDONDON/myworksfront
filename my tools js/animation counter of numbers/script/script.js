$('.count').each(function(){
  $(this).prop('Counter', 0).animate({  // prop возвращает или изменяет свойства выбраных элементов
    Counter:$(this).text()
  },{
    duration:100000,
    easing:'swing', // easing это переход название swing
    step:function(now){
      $(this).text(Math.ceil(now));
    }
  })
})
