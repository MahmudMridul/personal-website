
var scroll = new SmoothScroll('.navbar-nav a', { speed: 900 });

window.onscroll = function()
{
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scroll = (winScroll / height) * 100;
	document.getElementById("scrollBar").style.width = scroll + "%";
};

var btnContainer = document.getElementById("nav-active");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}