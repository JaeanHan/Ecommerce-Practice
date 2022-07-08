const userInputs = document.querySelectorAll(".user-input");
const submitBtn = document.querySelector("#submit");
const toSigninPage = document.querySelector("#toSIgnin");

let signupFlag = [false, false, false, false, false];

function isEmpty(str) {
	return str === "" || str === null || typeof str === undefined;
}

submitBtn.addEventListener("click", () => {
	for(let i = 0; i< userInputs.length; i++) {
		if(isEmpty(userInputs[i].value)) {
			alert((i === 0? "이름을"
					: i === 1? "사용자 이름을"
					: "비밀번호를")
					+ " 입력해주세요.");
			signupFlag[i] = false;
			return;
		}
		signupFlag[i] = true;
	}
	submit();
})

function submit() {
	$.ajax({
		type:"post",
		url: "/signup",
		data: {
			name: userInputs[0].value,
			email: userInputs[1].value,
			username: userInputs[2].value,
			password: userInputs[3].value
		},
		dataType:"text",
		success: (response) => {
			if(response === "true") {
				alert("축하합니다! Congrats!");
				location.replace("/signin");
			} else {
				alert("회원가입에 실패하였습니다. Error occured.")
				document.querySelector("form").reset();
			}
		},
		error: errorMsg
	})
}

function errorMsg() {
	alert("요청 실패")
}

toSigninPage.addEventListener("click", () => location.replace("/signin"))