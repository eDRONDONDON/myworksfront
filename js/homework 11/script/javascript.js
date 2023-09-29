var numArr = new Array (+prompt('введите число пунктов'));
var ul = document.querySelector('ul');
var fragment = document.createDocumentFragment();

for (var i = 0, j = numArr.length; i < j; i++){
  numArr [i] = prompt ('введите значение ' + i + '-го элемента списка', '');
  var li = document.createElement('li');
  li.className = 'must_be_removed';
    li.textContent = numArr[i];
    fragment.appendChild(li);
ul.appendChild(fragment);
}

setTimeout (function (){
    var li = document.getElementsByClassName('must_be_removed');
    while(li.length > 0){
        li[0].parentNode.removeChild(li[0]);
    }
},5000);
