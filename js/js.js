window.onscroll = function() {
  scrollDown();
};

function scrollDown() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.querySelector(".fixedHeader").style.top = "0";
  } else {
    document.querySelector(".fixedHeader").style.top = "-100px";
  }
}

// off canvas

var menu = document.querySelector("#menu");
var main = document.querySelector(".main");
var header = document.querySelector(".basedHeader");
var drawer = document.querySelector("#drawer");

menu.addEventListener("click", function(e) {
  drawer.classList.toggle("open");
  e.stopPropagation();
});

header.addEventListener("click", function() {
  drawer.classList.remove("open");
});

main.addEventListener("click", function() {
  drawer.classList.remove("open");
});
