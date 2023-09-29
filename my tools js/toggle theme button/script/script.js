document.getElementById('change-theme-btn').addEventListener('click', function(){
  let darkThemeEnabled = document.querySelector('.mainbg').classList.toggle('dark-theme');
  localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
});
if (JSON.parse(localStorage.getItem('dark-theme-enabled'))){
  document.querySelector('.mainbg').classList.add('dark-theme')
  document.getElementById('change-theme-btn').classList.add('dark-btn');
}
