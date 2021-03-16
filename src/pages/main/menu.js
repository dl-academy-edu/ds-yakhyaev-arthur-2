
(function menu() {

  var elm = "header__mobile";
  var buttonName = "header__menu-button";
  var closeName = "header__menu-close";
  var closeIcon = "header__menu-icon";

  var button = document.querySelector(`.${buttonName}`);
  var close = document.querySelector(`.${closeName}`);
  var icon = document.querySelector(`.${closeIcon}`);
  var menu = document.querySelector(`.${elm}`);

  button.addEventListener("click", modal, false);
  close.addEventListener("click", modal, false);
  icon.addEventListener("click", modal, false);

  function modal(e) {

    var menu = document.querySelector(`.${elm}`);
    var hidingClass = "--hidden";

    if (e.target === button) {
      console.log("Show menu!");
      e.target.classList.add(`header__menu-button${hidingClass}`);
      close.classList.remove(`header__menu-close${hidingClass}`);
      menu.classList.remove(`header__mobile${hidingClass}`);
      document.body.style.overflow = "hidden";
    } else {
      console.log("Hide menu!");
      close.classList.add(`header__menu-close${hidingClass}`);
      button.classList.remove(`header__menu-button${hidingClass}`);
      menu.classList.add(`header__mobile${hidingClass}`);
      document.body.style.overflow = "";
    }

  }

}());