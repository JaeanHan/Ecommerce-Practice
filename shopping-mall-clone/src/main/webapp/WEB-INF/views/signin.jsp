<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>로그인</title>
    <link rel="stylesheet" type="text/css" href="/statics/css/signin.css" />
    <script
      src="https://kit.fontawesome.com/3e27d22283.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div id="container">
      <h1>
        <i class="fa-solid fa-file-signature"></i> 사용자이름과 비밀번호를
        입력해주세요.
      </h1>
      <table>
        <tr>
          <th>
            <label for="username"><i class="fa-solid fa-user"></i></label>
          </th>
          <td>
            <input
              type="text"
              placeholder="username"
              id="username"
              class="user-input"
              value="${username}"
            />
          </td>
        </tr>
        <tr>
          <th>
            <label for="password"><i class="fa-solid fa-lock"></i></label>
          </th>
          <td>
            <input
              type="password"
              placeholder="password"
              id="password"
              class="user-input"
              value="${password}"
            />
          </td>
        </tr>
        <tr>
        <td>
          <input
            type="checkbox"
            id="remember-state"
            checked="${maintain}"
            title="only for 24h!"
          />
          <label for="remember-state">Remember?</label>
        </td>
        </tr>
        <tr>
          <th>
            <button type="button" class="submitBtn">
              Login
              <i class="fa-solid fa-check"></i>
            </button>
          </th>
          <th>
            <button type="reset" class="toSignup">
              Join <i class="fa-solid fa-right-to-bracket"></i>
            </button>
          </th>
        </tr>
      </table>
    </div>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-latest.min.js"
    ></script>
    <script type="text/javascript" src="/statics/js/signin.js"></script>
  </body>
</html>
