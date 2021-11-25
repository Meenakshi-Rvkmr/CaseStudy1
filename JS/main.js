function validate() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username != "admin" && password != "12345") {
    alert("Incorrect username or password");
  } else {
    window.location.href="todo.html";
  }
}
