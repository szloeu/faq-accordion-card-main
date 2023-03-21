var acc = document.getElementsByClassName("p-class-question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var parent = this.parentElement;
    var ancestor = parent.parentElement;
    var last = ancestor.lastElementChild;
    if (this.style.fontWeight === "700") {
      this.style.fontWeight = "400";
      this.nextElementSibling.style.transform = "rotate(0deg)"
      document.getElementById("img-box").style.left = "-5.5rem";
    } else {
      this.style.fontWeight = "700";
      this.nextElementSibling.style.transform = "rotate(180deg)";
      document.getElementById("img-box").style.left = "-7.5rem";
    }
    $(last).slideToggle();
  });
}

