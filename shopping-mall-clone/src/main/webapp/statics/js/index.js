const indexBtns = document.querySelectorAll("div#container ul li");

indexBtns[0].addEventListener("click", () => {
	location.href = "/signin";
})

indexBtns[1].addEventListener("click", () => {
	location.href = "/signup";
})