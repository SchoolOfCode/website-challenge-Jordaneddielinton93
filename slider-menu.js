function menu(param){
  document.getElementById("popup-menu").style.display = "block";
  document.getElementById(param).style.display = "block"
}
function closemenu(){
  document.getElementById("popup-menu").style.display = "none";
  document.getElementById("books").style.display = "none"
  document.getElementById("photos").style.display = "none"
  document.getElementById("aboutyas").style.display = "none"
}
function mobileMenu(){
  document.getElementById("mobile-menu-container").style.display = "flex";

}