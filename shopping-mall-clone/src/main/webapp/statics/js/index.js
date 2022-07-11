const indexBtns = document.querySelectorAll("div#container ul li");
const ownAddEventListner = (scope, type, handler, capture) => {
	scope.addEventListener(type, handler, capture);
	return () => {
		scope.removeEventListener(type, handler, capture);
	}
}
const signInLink = ownAddEventListner(indexBtns[0], "click", () => {
	location.href = "/signin";
}, false);

const signUpLink = ownAddEventListner(indexBtns[1], "click", () => {
	location.href = "/signup";
}, false);

load();

indexBtns.forEach(e => e.style.cursor = "pointer");

function load() {
	$.ajax({
		type: "get",
		url: "/api/v1/principal",
		dataType: "json",
		success : (response) => {
			if(response == null) {
				return;
			}
			loadNewIndex(response);
		}
	})
}

function loadNewIndex(principal) {
	document.querySelector("#container header h1").innerHTML = `Welcome ${principal.name}! <i class="fa-solid fa-fire"></i>`;
	signInLink();
	signUpLink();
	
	indexBtns[0].innerHTML = `<i class="fa-solid fa-user"></i> ${principal.name}`;
	indexBtns[1].innerHTML = `<i class="fa-solid fa-truck"></i> 주문 0`
	indexBtns[2].innerHTML = `<i class="fa-solid fa-arrow-right-from-bracket"></i> 로그아웃`;
	
	indexBtns[0].addEventListener("click", () => alert("Getting Ready!"))
	indexBtns[1].addEventListener("click", () => alert("Getting Ready!"))
	indexBtns[2].addEventListener("click", () => {
		$.ajax({
			type: "get",
			url: "/signout",
			success : () => {
				alert("안녕히가세요!");
				location.href="/index";
			},
			error : () => {
				alert("아직 갈 수 없어요")
			}
		})
	})
}