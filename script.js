document.addEventListener("DOMContentLoaded", () => {
  const clickableComponents = document.querySelectorAll(".clickable-component");
  const allPagesClickableComponent = document.querySelector(
    ".all-pages .clickable-component"
  );

  clickableComponents.forEach((component) => {
    component.addEventListener("click", () => {
      if (component === allPagesClickableComponent) {
        const allClicked = Array.from(clickableComponents).every((c) =>
          c.classList.contains("active")
        );

        if (allClicked) {
          clickableComponents.forEach((c) => {
            c.classList.remove("active");
            c.style.backgroundColor = "#FFFFFF";
            c.style.border = "1px solid #CDCDCD";
            c.style.opacity = "0.6";
            c.innerHTML = "";
          });
        } else {
          clickableComponents.forEach((c) => {
            c.classList.add("active");
            c.style.backgroundColor = "#5087F8";
            c.style.border = "none";
            c.style.opacity = "1";
            c.innerHTML =
              '<img src="/assets/checkmark.svg" class="checkmark" alt="Checkmark">';
          });
        }
      } else {
        if (component.classList.contains("active")) {
          component.classList.remove("active");
          component.style.backgroundColor = "#FFFFFF";
          component.style.border = "1px solid #CDCDCD";
          component.style.opacity = "0.6";
          component.innerHTML = "";
        } else {
          component.classList.add("active");
          component.style.backgroundColor = "#5087F8";
          component.style.border = "none";
          component.style.opacity = "1";
          component.innerHTML =
            '<img src="/assets/checkmark.svg" class="checkmark" alt="Checkmark">';
        }
      }
    });
  });
});
