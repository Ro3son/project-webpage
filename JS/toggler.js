// Navbar Toggler //

bars.addEventListener("click", toggler);
function toggler() {
  var x = document.getElementById("items");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  var y = document.getElementById("xmark");
  y.classList.toggle("fa-xmark");
}

// Thanks to geeksforgeeks.org and javascript.info intro events.
