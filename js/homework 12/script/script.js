var hideButton = document.getElementById('hideBtn');
hideButton.onclick = function (){
  var form = document.createElement('form');
  var inputDiametr = document.createElement('input');
  var inputColor = document.createElement('input');
  var paint =document.createElement('button'); paint.appendChild(document.createTextNode('Нарисовать'));
  document.body.appendChild(form);
  form.appendChild(inputDiametr).id='diametr';
  form.appendChild(inputColor).id='color';
  document.body.appendChild(paint).setAttribute('onclick','drawCircle()');
  document.getElementById('hideBtn').style.display='none';
};
function drawCircle(){
var circle = document.createElement('div');
circle.style.width = document.getElementById('diametr').value + 'px';
circle.style.height = document.getElementById('diametr').value + 'px';
circle.style.background = document.getElementById('color').value;
document.body.appendChild(circle);
};
