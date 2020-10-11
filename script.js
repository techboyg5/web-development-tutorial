var topNavigation = document.getElementsByClassName("tutorial-nav")[0];
document.addEventListener("scroll", stickNav);
function stickNav() {
  topNavigation.style.top = window.scrollY + 'px';
}
