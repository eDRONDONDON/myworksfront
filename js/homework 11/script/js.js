let x = +prompt('введите число пунктов');

const e = [];
for(let i=1;i<x;i++){
    e[i] = prompt('введите значение ' + i + '-го элемента списка');
};
const k = e.map(function(content){
    let li = document.createElement('li');
    li.innerHTML= `${content}`;
    return li;
});

const ul = document.createElement("ul");
for(let key of k){
    ul.appendChild(key);
}
document.body.appendChild(ul);

setTimeout(() => {
    ul.parentElement.removeChild(ul);
},1000);

ul.classList.add("list-style");
