// destination (cart icon)
document.addEventListener("click", function (event) {
  /* check if the DOM is ready to ensure script called after
    dom is already exist so we can select destination elem */

  if (document.readyState !== "complete") {
    console.log("DOM is not yet ready. Ignoring click event.");
    return;
  } else {
    const dest = document.querySelector("#destinaion-cart-icon");
    if (dest) {
      let c;
      let p;
      // get clasest parent regardless which element is clicked
      if (event.target.classList.contains("add_to_cart")) {
        p = event.target.closest(".product");
      } else {
        p = event.target.closest(".card");
      }

      // inside parent selelect img which will be cloned
      if (p) {
        const rect = p.getBoundingClientRect();
        c = p.querySelector("img").cloneNode(true);
        
        // adjust position based on scroll
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;
        const topOffset = Math.max(rect.top + scrollY, 0); // ensure item is fully visible vertically
        const leftOffset = Math.max(rect.left + scrollX, 0); // ensure item is fully visible horizontally
       

        // add some styles and position the cloned img
        c.style.position = "absolute";
        c.style.top = topOffset + "px";
        c.style.left = leftOffset + "px";
        c.style.width = rect.width + "px";
        c.style.height = rect.height + "px";
        c.style.zIndex = "99999";

        // calcuate destination directions
        const destRect = dest.getBoundingClientRect();
        const destDirections = {
          top: destRect.top + destRect.height / 2 + scrollY,
          left: destRect.left + destRect.width / 2 + scrollX,
        };

        /*the upper parent [document first element, 
        which is the container] will append the cloned img to it*/
        const parentElem = document.querySelector(".products-list");

        // make sure the container will append to it cloned img is existed in dom
        if (document.contains(parentElem)) {
          parentElem.appendChild(c);
        }

        // calculate distance between start[clicked elm] and destination
        const distanceX = destDirections.left - leftOffset;
        const distanceY = destDirections.top - topOffset;
        const distance = Math.sqrt(
          distanceX * distanceX + distanceY * distanceY
        );

        // adjust animation duration based on distance
        const duration = Math.max(1000, distance / 2); // Minimum duration of 1000ms

        animateElement(
          c,
          {
            top: destDirections.top,
            left: destDirections.left,
            width: "0",
            height: "0",
            opacity: "0",
          },
          duration,
          function () {
            c.remove();
          }
        );
      }
    }
  }
});

function animateElement(element, styles, duration, callback) {
  const start = performance.now();
  const computedStyles = getComputedStyle(element);
  const initialStyles = {};
  for (const property in styles) {
    initialStyles[property] = parseFloat(computedStyles[property]);
  }

  // generating key frame for animation
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    const progress = timeFraction;
    for (const property in styles) {
      element.style[property] =
        initialStyles[property] +
        (styles[property] - initialStyles[property]) * progress +
        (property === "opacity" ? "" : "px");
    }
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    } else {
      if (callback) callback();
    }
  });
}
