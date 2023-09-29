document.getElementById('change-theme-btn').addEventListener('click', function(){
  let darkThemeEnabled = document.querySelector('.main-bg').classList.toggle('dark-theme');
  document.querySelector('.head').classList.toggle('dark-head')
  document.querySelector('.logo').classList.toggle('dark-logohover');
  document.getElementsByTagName("a")[0].classList.toggle('dark-links');
  document.getElementsByTagName("a")[1].classList.toggle('dark-links');
  document.getElementsByTagName("a")[2].classList.toggle('dark-links');
  document.getElementsByTagName("a")[3].classList.toggle('dark-links');
  document.querySelector('.square').classList.toggle('dark-square');
  document.querySelector('.create').classList.toggle('dark-create');
  document.querySelector('.form').classList.toggle('dark-form');
  document.querySelector('.icon-cal').classList.toggle('dark-icon-cal');
  document.querySelector('.icon-forum').classList.toggle('dark-icon-forum');
  document.querySelector('.icon-search').classList.toggle('dark-icon-search');
  localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
});
if (JSON.parse(localStorage.getItem('dark-theme-enabled'))){
  document.querySelector('.main-bg').classList.add('dark-theme');
  document.querySelector('.head').classList.add('dark-head');
  document.querySelector('.logo').classList.add('dark-logohover')
  document.getElementsByTagName("a")[0].classList.add('dark-links');
  document.getElementsByTagName("a")[1].classList.add('dark-links');
  document.getElementsByTagName("a")[2].classList.add('dark-links');
  document.getElementsByTagName("a")[3].classList.add('dark-links');
  document.querySelector('.square').classList.add('dark-square');
  document.querySelector('.create').classList.add('dark-create');
  document.querySelector('.form').classList.add('dark-form');
  document.querySelector('.icon-cal').classList.add('dark-icon-cal');
  document.querySelector('.icon-forum').classList.add('dark-icon-forum');
  document.querySelector('.icon-search').classList.add('dark-icon-search');
}
