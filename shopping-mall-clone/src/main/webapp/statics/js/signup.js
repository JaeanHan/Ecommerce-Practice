const userInputs = document.querySelectorAll(".user-input");
const submitBtn = document.querySelector("#submit");
const toSigninPage = document.querySelector("#toSIgnin");

const usernameInput = document.querySelector("#username");
const userLog = document.querySelector(".user-log");

let sendCode; // email varification code

let signupFlag = [false, false, false, false, false];
let inputStates = {
	username : false,
	password : false,
	passwordCheck : false,
	name : false,
	email : false
}

function inputStatesCheck() {
	if (inputStates.username == false) return;
	if (inputStates.password == false) return;
	if (inputStates.passwordCheck == false) return;
	if (inputStates.email == false) return;
	
	const submitButton = document.querySelector("#submit");
	submitButton.disabled = false;
	submitButton.addEventListener("click", () => submit());
}



function isEmpty(str) {
	return str === "" || str === null || typeof str === undefined;
}

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

	if(username.search(/\s/) == -1 && !specialChar.test(username) && username != "") {
		userLog.innerHTML = "";
	    $.ajax({
	        type:"get",
	        url: `/check/username?username=${username}`,
	        dataType:"text",
	        success: (response) => {
	            if(response === "true") {
	                showResult.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
	            } else {
	                showResult.innerHTML = `<i class="fa-solid fa-ban"></i>`;
	                userLog.innerHTML = "username already taken";
	                //alert("username already taken");
	            }
	
	            inputStates.username = true;
	            inputStatesCheck();
	            
	        },
	        error: errorMsg
	    })		
	} else {
		showResult.innerHTML = `<i class="fa-solid fa-ban"></i>`;
		inputStates.username = false;
		userLog.innerHTML = "username should not contain any space or special character";
		//alert("username should not contain any space or special character");
	}
	
});
    
function errorMsg() {
	alert("요청 실패");
}

toSigninPage.addEventListener("click", () => location.replace("/signin"))

const passwordInput = document.querySelector("#password");
const passwordCheckInput = document.querySelector("#password-check");
const passwordViewBtn = document.querySelector(".view-password");
const passwordCheckViewBtn = document.querySelector(".view-password-check");

passwordViewBtn.addEventListener("click", () => {
  const state = passwordInput.type;
  passwordInput.type = state === "password" ? "text" : "password";
  passwordViewBtn.innerHTML =
    state === "password"
      ? `<i class="fa-solid fa-eye-slash"></i>`
      : `<i class="fa-solid fa-eye"></i>`;
  passwordViewBtn.style.cursor = pointer;
});

passwordCheckViewBtn.addEventListener("click", () => {
	const state = passwordCheckInput.type;
	passwordCheckInput.type = state === "password" ? "text" : "password";
	passwordCheckViewBtn.innerHTML = 
	  state === "password"
	    ? `<i class="fa-solid fa-eye-slash"></i>`
	    : `<i class="fa-solid fa-eye"></i>`;
	passwordCheckViewBtn.stlye.cursor = pointer;
})

passwordCheckInput.addEventListener("blur", () => {
  const passwordOrigin = passwordInput.value;
  const passwordCheck = passwordCheckInput.value;
  const showResult = document.querySelector(".password-check-result");

  if(passwordOrigin === passwordCheck) {
	showResult.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
	inputStates.passwordCheck = true;
	inputStatesCheck();
	return;
  }
  showResult.innerHTML = `<i class="fa-solid fa-ban"></i>`;
  inputStates.passwordCheck = false;
});

passwordInput.addEventListener("blur", () => {
	const password = passwordInput.value;
    const specialChar = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
    const passwordValidation = document.querySelector(".password-validation");
    
	if(password.search(/\s/) == -1 && !specialChar.test(password) && password != "" ) {
		passwordValidation.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
		userLog.innerHTML = "";
		inputStates.password = true;
		inputStatesCheck();
		return;
	}

	//alert("password should not contain any white space or special character");
	passwordValidation.innerHTML = `<i class="fa-solid fa-ban"></i>`;
	userLog.innerHTML = "password should not contain any white space or special character";
	inputStates.password = false;
	
})

const nameInput = document.querySelector("#name");

nameInput.addEventListener("blur", () => {
	const name = nameInput.value;
	const showResult = document.querySelector(".name-check-result");
	
	if(name.search(/\s/) == -1 ) {
		showResult.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
		userLog.innerHTML = "";
		inputStates.name = true;
		inputStatesCheck();
	} else {
		showResult.innerHTML = `<i class="fa-solid fa-ban"></i>`;
		//alert("name should not contain any space");
		userLog.innerHTML = "name should not contain any space";
		inputStates.name = false;
	}
})

const emailInput = document.querySelector("#email");
let tmpCode = 1234;

emailInput.addEventListener("change", () => {
	const email = emailInput.value;
	const showResult = document.querySelector(".email-check-result");
	
	if(email === "") {
		showResult.innerHTML = "";
		isEmailSent.innerHTML = "";
		inputStates.email = false;
		return;
	}

	showResult.innerHTML = `<button id="sendCode" type="button"><i class="fa-solid fa-paper-plane"></i></button>`;
    sendCode = document.querySelector("#sendCode");
    sendCode.addEventListener("click", () => {
      verificationInput.disabled = false;
      
      $.ajax({
		type : "post",
		url : "/api/v1/email",
		data : { email : email },
		dataType : "text",
		success : (response) => {
			if (response === "false") {
				alert("이메일 전송중 에러가 발생하였습니다.");
			} else {
				//console.log(response);
				tmpCode = response;
			}
		},
		error : (request, status, error) => {
			console.log(request.status);
			console.log(request.responseText);
			console.log(error);
		}
	  })
      
      const isEmailSent = document.querySelector(".email-send-state");      
      isEmailSent.innerHTML = `<i class="fa-regular fa-circle-check">`;
      console.log(`email sent to ${email}`);
      }
    );
})

const verifyButton = document.querySelector(".verify-email");
const verificationInput = document.querySelector("#email-verification");

verifyButton.addEventListener("click", () => {
	const code = verificationInput.value;
	
	//code check
	if(code == tmpCode) {
	  verifyButton.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
	  inputStates.email = true;
	  inputStatesCheck();
	  return;	
	} 
	
	verifyButton.innerHTML = `<i class="fa-solid fa-ban"></i>`;
	inputStates.email = false;
	verificationInput.addEventListener("keyup", () => {
		verifyButton.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;
	})
});
