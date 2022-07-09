<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>회원가입</title>
    <link rel="stylesheet" type="text/css" href="statics/css/signup.css" />
    <script
      src="https://kit.fontawesome.com/3e27d22283.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div id="container">
      <h1>
        <i class="fa-solid fa-file-signature"></i> 형식에 맞춰 정보를
        기입해주세요.
      </h1>
      <form id="form" action="" method="">
        <table>
          <tr>
            <th>
              <label for="username">아이디</label>
            </th>
            <td>
              <input
                type="text"
                placeholder="username"
                id="username"
                class="user-input"
                autocomplete="off"
                autofocus
              />
              <span class="username-validation"></span>
            </td>
          </tr>
          <tr>
            <th>
              <label for="password">비밀번호</label>
            </th>
            <td>
              <input
                type="password"
                placeholder="password"
                id="password"
                class="user-input"
                autocomplete="off"
              />
              <span class="view-password"><i class="fa-solid fa-eye"></i></span>
            </td>
          </tr>
          <tr>
            <th>
              <label for="password-check">비밀번호 확인</label>
            </th>
            <td>
              <input
                type="password"
                placeholder="password check"
                id="password-check"
                class="user-input"
                autocomplete="off"
              />
              <span class="password-check-result"></span>
            </td>
          </tr>
          <tr>
            <th>
              <label for="name">이름</label>
            </th>
            <td>
              <input
                type="text"
                placeholder="name"
                id="name"
                class="user-input"
                autocomplete="off";
              />
              <span class="name-check-result"></span>
            </td>
          </tr>
          <tr>
            <th>
              <label for="email">이메일</label>
            </th>
            <td>
              <input
                type="email"
                placeholder="email"
                id="email"
                class="user-input"
              />
              <span class="email-check-result"></span>
            </td>
          </tr>
          <tr>
            <th>이메일 확인 코드</th>
            <td>
              <input
                type="text"
                placeholder="validation code"
                id="validation-code"
                class="user-input"
              />
            </td>
          </tr>
          <tr>
            <th>
              <button type="reset" id="toSIgnin">
                Login <i class="fa-solid fa-right-to-bracket"></i>
              </button>
            </th>
            <th>
              <button type="reset" id="reset">
                reset
                <i class="fa-solid fa-rotate-right"></i>
              </button>
            </th>
            <th>
              <button type="button" id="submit">
                confirm
                <i class="fa-solid fa-check"></i>
              </button>
            </th>
          </tr>
        </table>
      </form>
    </div>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-latest.min.js"
    ></script>
    <script type="text/javascript" src="statics/js/signup.js"></script>
  </body>
</html>
    