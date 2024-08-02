document.addEventListener("DOMContentLoaded", () => {
  const clickableComponents = document.querySelectorAll(".clickable-component");
  const allPagesClickableComponent = document.querySelector(
    ".all-pages .clickable-component"
  );

  const checkmarkSVG = `
    <svg width="23px" height="23px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" stroke="#FFFFFF">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <polyline points="416 128 192 384 96 288" style="fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></polyline>
      </g>
    </svg>`;

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
            c.innerHTML = checkmarkSVG;
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
          component.innerHTML = checkmarkSVG;
        }
      }
    });
  });
});
