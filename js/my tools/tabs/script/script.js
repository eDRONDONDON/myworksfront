(() => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");
  const tabsWrap = document.querySelector(".tabs-titles");
  const activeClass = "active";
//обрабатываем клик по родителю с табами
  tabsWrap.addEventListener("click", e => {
    //если произошел клик по элементу с классом tab
    if (e.target.classList.contains("tab")) {
      //идем циклом по всем tab
      [...tabs].forEach((tab, tabIndex, tabArray) => {
        //у всех tab и tab-content удаляем класс active
        tab.classList.remove(activeClass);
        contents[tabIndex].classList.remove(activeClass);
        //если кликнули по tab
        if (e.target === tab) {
          //добавляем этому элементу(tab) класс active
          tab.classList.add(activeClass);
          //добавляем соотв-щему tab-content класс active
          contents[tabIndex].classList.add(activeClass);
        }
      });
    }
  });
})();
