const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const accordionDescription = this.nextElementSibling;
    const pulsIcon = this.querySelector(".plus-icon");
    const minusIcon = this.querySelector(".minus-icon");

    if (accordionDescription.style.maxHeight) {
      accordionDescription.style.maxHeight = null;
      pulsIcon.style.display = "block";
      minusIcon.style.display = "none";
    } else {
      accordionDescription.style.maxHeight =
        accordionDescription.scrollHeight + "px";
      pulsIcon.style.display = "none";
      minusIcon.style.display = "block";
    }
  });
});
