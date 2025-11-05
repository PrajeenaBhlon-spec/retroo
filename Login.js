
function btnAction() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username == "") {
    alert("Username is required");
  }
  if (password == "") {
    alert("Password is required");
  }
}