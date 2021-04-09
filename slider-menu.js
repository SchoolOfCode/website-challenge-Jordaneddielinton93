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
let onoff = false;
function mobileMenu(){
  if(!onoff){
    document.getElementById("mobile-menu-container").style.display = "flex";
    onoff = true;

  }else{
    document.getElementById("mobile-menu-container").style.display = "none";
    onoff = false;
  }
}