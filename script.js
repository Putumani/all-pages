document.addEventListener("DOMContentLoaded", function () {
  const clickableComponents = document.querySelectorAll(".clickable-component");
  const allPagesComponent = document.getElementById("all-pages-component");
  let allPagesSelected = false;

  function updateComponentState() {
    if (allPagesSelected) {
      clickableComponents.forEach((comp) => {
        comp.classList.add("variant5");
        comp.classList.remove("variant2");
        comp.classList.remove("variant1");
      });
      allPagesComponent.classList.add("variant4");
      allPagesComponent.classList.remove("variant5");
    } else {
      clickableComponents.forEach((comp) => {
        comp.classList.remove("variant4");
        comp.classList.remove("variant5");
        comp.classList.add("variant1");
      });
      allPagesComponent.classList.remove("variant4");
      allPagesComponent.classList.remove("variant5");
    }
  }

  clickableComponents.forEach((component) => {
    component.addEventListener("mouseenter", function () {
      if (!allPagesSelected) {
        component.classList.add("variant2");
        component.classList.remove("variant1");
      }
    });

    component.addEventListener("mouseleave", function () {
      if (!allPagesSelected) {
        component.classList.add("variant1");
        component.classList.remove("variant2");
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
      if (component.classList.contains("variant4")) {
        component.classList.add("variant5-transition");
        component.classList.remove("variant4");
        setTimeout(() => {
          component.classList.remove("variant5-transition");
          component.classList.add("variant2");
        }, 100);
      } else {
        component.classList.add("variant4");
        component.classList.remove("variant1");
        component.classList.remove("variant5");
      }
    });
  });

  allPagesComponent.addEventListener("click", function () {
    allPagesSelected = !allPagesSelected;
    updateComponentState();
  });

  allPagesComponent.addEventListener("mouseleave", function () {
    if (allPagesSelected) {
      allPagesComponent.classList.remove("variant4");
      allPagesComponent.classList.add("variant5");
      clickableComponents.forEach((comp) => {
        comp.classList.add("variant5");
        comp.classList.remove("variant4");
      });
    }
  });
});
