var name = prompt("what is your name?");
var output = document.querySelector("#greeting");

if (name) {
  output.innerHTML = "<p>" + name + " is logged in .<p>";
}
else {
  output.innerHTML = "<p> Invalid Username </p>";
}
