function openMenu() {
  document.getElementById("sideBar").style.width = "250px";
}

function closeMenu() {
  document.getElementById("sideBar").style.width = "0";
}

var i = 0;
var txt = "Hello There! \nMy name is Aashiq \nWelcome to my \nonline portfolio";
var spd = 80;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typed").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, spd);
  }
}
