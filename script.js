document.addEventListener("DOMContentLoaded", function () {
  const clickableComponents = document.querySelectorAll(".clickable-component");
  const allPagesComponent = document.getElementById("all-pages-component");
  const allPagesClickableComponent = allPagesComponent.querySelector(
    ".clickable-component"
  );
  let allPagesSelected = false;

  function applyVariants(element, variantsToAdd, variantsToRemove) {
    variantsToAdd.forEach((variant) => element.classList.add(variant));
    variantsToRemove.forEach((variant) => element.classList.remove(variant));
  }

  function handleMouseEnter(component) {
    if (allPagesSelected) {
      if (component.classList.contains("variant5")) {
        applyVariants(component, ["variant5"], ["variant4"]);
      } else {
        applyVariants(component, ["variant5"], ["variant1"]);
      }
    } else {
      if (component.classList.contains("variant5")) {
        applyVariants(component, ["variant4"], ["variant5"]);
      } else if (!component.classList.contains("variant4")) {
        applyVariants(component, ["variant2"], ["variant1"]);
      }
    }
  }

  function handleMouseLeave(component) {
    if (allPagesSelected) {
      if (component.classList.contains("variant5")) {
        applyVariants(component, ["variant5"], ["variant4"]);
      }
    } else {
      if (component.classList.contains("variant4")) {
        applyVariants(component, ["variant5"], ["variant4"]);
      } else {
        applyVariants(component, ["variant1"], ["variant2"]);
      }
    }
  }

  function handleClick(component) {
    if (component.classList.contains("variant4")) {
      applyVariants(component, ["variant5-transition"], ["variant4"]);
      setTimeout(() => {
        applyVariants(component, ["variant2"], ["variant5-transition"]);
      }, 50);
    } else {
      applyVariants(component, ["variant4"], ["variant1", "variant5"]);
    }
  }

  function setupClickEvents() {
    clickableComponents.forEach((component) => {
      component.addEventListener("mouseenter", () =>
        handleMouseEnter(component)
      );
      component.addEventListener("mouseleave", () =>
        handleMouseLeave(component)
      );
      component.addEventListener("mousedown", () => {
        if (component.classList.contains("variant4")) {
          applyVariants(component, ["variant5-transition"], []);
        } else if (!component.classList.contains("variant4")) {
          applyVariants(component, ["variant3"], []);
        }
      });
      component.addEventListener("mouseup", () => {
        if (component.classList.contains("variant5-transition")) {
          applyVariants(component, ["variant2"], ["variant5-transition"]);
        } else if (!component.classList.contains("variant4")) {
          applyVariants(component, [], ["variant3"]);
        }
      });
      component.addEventListener("click", () => handleClick(component));
    });
  }

  function updateComponentState() {
    if (allPagesSelected) {
      clickableComponents.forEach((comp) =>
        applyVariants(comp, ["variant5"], ["variant2", "variant1"])
      );
      applyVariants(allPagesClickableComponent, ["variant4"], ["variant5"]);
    } else {
      clickableComponents.forEach((comp) =>
        applyVariants(comp, ["variant1"], ["variant4", "variant5"])
      );
      applyVariants(allPagesClickableComponent, [], ["variant4", "variant5"]);
    }
  }

  setupClickEvents();

  allPagesClickableComponent.addEventListener("click", () => {
    allPagesSelected = !allPagesSelected;
    updateComponentState();
  });

  allPagesComponent.addEventListener("mouseleave", () => {
    if (allPagesSelected) {
      applyVariants(allPagesClickableComponent, ["variant5"], ["variant4"]);
      clickableComponents.forEach((comp) =>
        applyVariants(comp, ["variant5"], ["variant4"])
      );
      allPagesSelected = false;
    }
  });
});
