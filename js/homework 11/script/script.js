let listNum = +prompt('введите число пунктов');

const listQuantity =[];
for (let i = 0; i < listNum; i++){
  listQuantity [i] = prompt ('введите значение ' + (i+1) + '-го элемента списка')
};
const listCreate = listQuantity.map(function(content){
  let li = document.createElement('li');
  li.innerHTML = `${content}`;
  return li;
});
const ul = document.createElement("ul");
for(let key of listCreate){
    ul.appendChild(key);
};
document.body.appendChild(ul);
ul.classList.add("listyle");

setTimeout (function (){
    ul.parentElement.removeChild(ul);
  },10000);
