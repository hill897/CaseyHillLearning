var firstName = prompt("what is your first name?") || "Visitor";

var lastName = prompt("what is your last name?") || "McPoopy Pants";

var output = document.querySelector("#greeting");

if (firstName && lastName) {
  output.innerHTML = "<p>" + firstName + " " + lastName + " is logged in .<p>";
}
else {
  output.innerHTML = "<p> Invalid Username </p>";
}
