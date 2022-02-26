function toggler() {
  var x = document.getElementById("items");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function myFunction(x) {
  x.classList.toggle("fa-xmark");
}
// Thanks geeksforgeeks.org