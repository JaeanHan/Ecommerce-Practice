const indexBtns = document.querySelectorAll("div#container ul li");


load();

indexBtns.forEach(e => e.style.cursor = "pointer");
indexBtns[0].addEventListener("click", () => location.href = "/signin");
indexBtns[1].addEventListener("click", () => location.href = "/signup");


function load() {
	$.ajax({
		type: "get",
		url: "/api/v1/principal",
		dataType: "json",
		success : (response) => {
			if(response == null) {
				return;
			}
			
			loadUserInfo(response);
		}
	})
}

function loadUserInfo(principal) {
	indexBtns[0].innerHTML = principal.name;
	indexBtns[1].innerHTML = "로그아웃";
	
	indexBtns[0].addEventListener("click", () => alert("Getting Ready!"))
	indexBtns[1].addEventListener("click", () => {
		$.ajax({
			type: "get",
			url: "/signout",
			success : () => {
				alert("안녕히가세요!");
			},
			error : () => {
				alert("아직 갈 수 없어요")
			}
		})
	})
}