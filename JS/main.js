function validate() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username == "admin" && password == "12345") {    
    window.location.href="todo.html";
  } else {
    alert("Incorrect username or password");
  }
}


$(document).ready(function () {
    document.getElementById("loginbutton").addEventListener("click", validate);
  });
  
