document.addEventListener("DOMContentLoaded", function () {
  const clickableComponents = document.querySelectorAll(".clickable-component");
  const allPagesComponent = document.getElementById("all-pages-component");

  clickableComponents.forEach((component) => {
    component.addEventListener("mouseenter", function () {
      if (!component.classList.contains("variant4")) {
        component.classList.add("variant2");
        component.classList.remove("variant1");
      }
    });

    component.addEventListener("mouseleave", function () {
      if (!component.classList.contains("variant4")) {
        component.classList.remove("variant2");
        component.classList.add("variant1");
        component.classList.remove("variant3");
      }
    });

    component.addEventListener("mousedown", function () {
      if (!component.classList.contains("variant4")) {
        component.classList.add("variant3");
      }
    });

    component.addEventListener("mouseup", function () {
      if (!component.classList.contains("variant4")) {
        component.classList.remove("variant3");
      }
    });

    component.addEventListener("click", function () {
      if (component === allPagesComponent) {
        document.querySelector(".card").classList.add("all-pages-clicked");
        clickableComponents.forEach((comp) => {
          comp.classList.add("variant4");
          comp.classList.remove("variant2");
          comp.classList.remove("variant1");
        });
        document.addEventListener("mousemove", handleMouseMoveOutside);
      } else {
        component.classList.add("variant4");
        component.classList.remove("variant2");
        component.classList.remove("variant1");
        document.addEventListener("mousemove", handleMouseMoveOutside);
      }
    });
  });

  function handleMouseMoveOutside(event) {
    clickableComponents.forEach((component) => {
      const rect = component.getBoundingClientRect();
      const inBounds =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!inBounds && component.classList.contains("variant4")) {
        component.classList.add("variant5");
        component.classList.remove("variant4");
        document.removeEventListener("mousemove", handleMouseMoveOutside);
      }
    });
  }
});
