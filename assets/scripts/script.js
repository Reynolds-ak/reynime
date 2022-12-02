function loginUser() {
  let username = document.getElementById("user-email").value;
  let password = document.getElementById("user-password").value;
  validateLoginForm(username, password);
}

function validateLoginForm(username, password) {
  if (username && password)
    alert("username: " + username + "\n" + "password: " + password);
  else alert("Email and Password required");
}

function signupUser() {
  let email = document.getElementById("user-email").value;
  let username = document.getElementById("user-name").value;
  let password = document.getElementById("user-password").value;
  validateSignUpForm(email, username, password);
}

function validateSignUpForm(email, username, password) {
  if (email && username && password)
    alert("email" + email + "\n" + "username: " + username + "\n" + "password: " + password);
  else alert("Email, Username and Password are required");
}
