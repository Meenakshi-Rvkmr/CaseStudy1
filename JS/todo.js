$(document).ready(function () {
  ajax();
});

function ajax() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // document.getElementById("list").innerHTML = this.response;
      var todoList = JSON.parse(this.response);

      var table = document.getElementById("todolist");
      for (let i = 0; i < todoList.length; i++) {
        let item = todoList[i];
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "name" + item.title;
        checkbox.value = item.title;
        checkbox.id = "checkbox" + item.id;
        checkbox.checked = item.completed;
        checkbox.disabled = item.completed;
        checkbox.className = "form-check-input";
        checkbox.onchange = function () {
          countToDos(item.id);
        };

        let row = table.insertRow();
        let cell1 = row.insertCell();
        cell1.appendChild(checkbox);
        let cell2 = row.insertCell();
        cell2.innerText = item.title;
      }
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}

function logout() {
  window.location.href = "index.html";
}

function countToDos(itemid) {
  let count = document.querySelectorAll(
    "input[type=checkbox]:checked:enabled"
  ).length;
  if (count == 5) {
    alert("Congrats. 5 Tasks have been Successfully Completed ");
    // let checkbox = document.getElementById("checkbox" + itemid);
    // checkbox.checked = false;
  }
}
