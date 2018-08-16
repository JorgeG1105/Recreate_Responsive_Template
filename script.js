let hamburger = document.querySelector(".hamburger");
let mainNav = document.querySelector(".mainNav")

hamburger.addEventListener("click", function(){
	this.classList.toggle("change");
	if (mainNav.style.display === "block") {
		mainNav.style.display = "none";
	}
	else {
		mainNav.style.display = "block";
	}
});