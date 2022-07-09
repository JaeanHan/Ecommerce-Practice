const userInputs = document.querySelectorAll(".user-input");
const submitBtn = document.querySelector("#submit");
const toSigninPage = document.querySelector("#toSIgnin");

const usernameInput = document.querySelector("#username");

let signupFlag = [false, false, false, false, false];

function isEmpty(str) {
	return str === "" || str === null || typeof str === undefined;
}

submitBtn.addEventListener("click", () => {
	for(let i = 0; i< userInputs.length; i++) {
		if(isEmpty(userInputs[i].value)) {
			alert((i === 0? "사용자 이름을"
					: i === 1? "비밀번호를"
					: i === 2? "비밀번호 확인란을"
					: i === 3? "이름을"
					: i === 4? "이메일을"
					: "이메일 확인란을"
					) + " 입력해주세요.");
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
			username: userInputs[0].value,
			password: userInputs[1].value,
			name: userInputs[3].value,
			email: userInputs[4].value
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

usernameInput.addEventListener("blur", () => {
    const showResult = document.querySelector(".username-validation");
    const username = usernameInput.value;
    const specialChar = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

	if(username.search(/\s/) == -1 && !specialChar.test(username)) {
	    $.ajax({
	        type:"get",
	        url: `/check/username?username=${username}`,
	        dataType:"text",
	        success: (response) => {
	            if(response === "true") {
	                showResult.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
	            } else {
	                showResult.innerHTML = `<i class="fa-solid fa-ban"></i>`;
	                alert("username already taken");
	            }
	
	            console.log("응답 후 성공: " + response);
	        },
	        error: errorMsg
	    })		
	} else {
		showResult.innerHTML = `<i class="fa-solid fa-ban"></i>`;
		alert("username should not contain any space or special character");
	}
	
});
    
function errorMsg() {
	alert("요청 실패")
}

toSigninPage.addEventListener("click", () => location.replace("/signin"))

const passwordInput = document.querySelector("#password");
const passwordCheckInput = document.querySelector("#password-check");
const passwordViewBtn = document.querySelector(".view-password");

passwordViewBtn.addEventListener("click", () => {
  const state = passwordInput.type;
  passwordInput.type = state === "password" ? "text" : "password";
  passwordViewBtn.innerHTML =
    state === "password"
      ? `<i class="fa-solid fa-eye-slash"></i>`
      : `<i class="fa-solid fa-eye"></i>`;
});

passwordCheckInput.addEventListener("blur", () => {
  const passwordOrigin = passwordInput.value;
  const passwordCheck = passwordCheckInput.value;
  const showResult = document.querySelector(".password-check-result");

  showResult.innerHTML =
    passwordOrigin === passwordCheck
      ? `<i class="fa-regular fa-circle-check"></i>`
      : `<i class="fa-solid fa-ban"></i>`;

});

const nameInput = document.querySelector("#name");

nameInput.addEventListener("blur", () => {
	const name = nameInput.value;
	const showResult = document.querySelector(".name-check-result");
	
	if(name.search(/\s/) == -1 ) {
		showResult.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
	} else {
		showResult.innerHTML = `<i class="fa-solid fa-ban"></i>`;
		alert("name should not contain any space");
	}
})

const emailInput = document.querySelector("#email");

emailInput.addEventListener("change", () => {
	const email = emailInput.value;
	const showResult = document.querySelector(".email-check-result");
	
	if(email === "") {
		showResult.innerHTML = "";
		return;
	}

	showResult.innerHTML = `<button id="sendCode" type="button">send to ${email}</button>`;
    sendCode = document.querySelector("#sendCode");
    sendCode.addEventListener("click", () => 
      //send varification code to email
      console.log("hi")
    );

})

let sendCode;