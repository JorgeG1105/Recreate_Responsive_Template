let hamburger = document.querySelector(".hamburger");
let mainNav = document.querySelector(".mainNav")

hamburger.addEventListener("click", function(){
	this.classList.toggle("change");
	mainNav.classList.toggle("toggleDisplay");
});