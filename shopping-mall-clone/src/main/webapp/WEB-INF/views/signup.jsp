<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>
<link rel="stylesheet" type="text/css" href="/statics/css/signup.css">
<script src="https://kit.fontawesome.com/3e27d22283.js" crossorigin="anonymous"></script>
</head>
<body>
	<form id="container">
		<h1><i class="fa-solid fa-file-signature"></i> 형식에 맞춰 정보를 기입해주세요.</h1>
		<label for="name">이름</label>
		<input type="text" placeholder="name" id="name" class="user-input"/>
		<label for=email>이메일</label>
		<input type="email" placeholder="email" id="email" class="user-input" />
		<label for="username">아이디</label>
		<input type="text" placeholder="username" id="username" class="user-input" />
		<label for="password">비밀번호</label>
		<input type="password" placeholder="password" id="password" class="user-input" />
		<button type="reset"><i class="fa-solid fa-rotate-right"></i></button>
		<button type="button" id="submit"><i class="fa-solid fa-check"></i></button>
		<button type="reset" id="toSIgnin" >로그인 페이지</button>
	</form>
<script type="text/javascript" src="https://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="/statics/js/signup.js"></script>
</body>
</html>