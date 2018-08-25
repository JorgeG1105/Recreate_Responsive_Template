let hamburger = document.querySelector(".hamburger");
let mainNav = document.querySelector(".mainNav")
/*---This will trigger the hamburger to change when clicked in mobile mode--*/
hamburger.addEventListener("click", function(){
	this.classList.toggle("change");
	mainNav.classList.toggle("toggleDisplay");
});