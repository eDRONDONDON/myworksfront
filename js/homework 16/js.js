document.getElementById('change-theme-btn').addEventListener('click',function(){
  let themee = document.getElementsByTagName('link')[1].href="css/master.css"
  localStorage.setItem('dark-master', themee);
});
if (localStorage.getItem('dark-master')){
  document.getElementById('change-theme-btn').addEventListener('click',function(){
  document.getElementsByTagName('link')[1].href="css/darkmaster.css"
},false);
}
