const userInputs = document.querySelectorAll(".user-input");
const submitBtn = document.querySelector(".submitBtn");
const toSignupBtn = document.querySelector(".toSignup");

toSignupBtn.addEventListener("click", () => location.href="/signup");

submitBtn.addEventListener("click", () => {
	for(let i = 0; i < userInputs.length; i++) {
		if(isEmpty(userInputs[i].value)) {
			alert(
				(i === 0? "사용자 이름을" : "비밀번호를") + " 입력해주세요.")
			return;
		}
	}
	submit();
})

function submit() {
	$.ajax({
		type:"post",
		url: "/signin",
		data: {
			username: userInputs[0].value,
			password: userInputs[1].value
		},
		dataType: "text",
		success : (response) => {
			if(response === "true") {
				alert("로그인 성공! 환영합니다!");
				location.replace("/index");
			} else {
				alert("사용자 정보를 확인해주세요.");
			}
		},
		error : errorMessage
	})
}

function errorMessage(response, status, error) {
	alert("요청 실패");
	console.log(request.status); //매개변수로 받아오는 status는 자리 채워주기 용도
	console.log(request.responseText);
	console.log(error);
}

function isEmpty(str) {
	return str == "" || str == null || typeof str == undefined;
}