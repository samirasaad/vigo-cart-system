// destination (cart icon)
const dest = document.querySelector("#destinaion-cart-icon");

document.addEventListener("click", function (event) {
  if (dest) {
    let c;
    let p;
    if (event.target.classList.contains("add_to_cart")) {
      p = event.target.closest(".product");
    } else {
      p = event.target.closest(".card");
    }

    if (p) {
      const rect = p.getBoundingClientRect();
      c = p.querySelector("img").cloneNode(true);
      c.style.position = "absolute";

      // adjust position based on scroll
      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;
      const topOffset = Math.max(rect.top + scrollY, 0); // ensure item is fully visible vertically
      const leftOffset = Math.max(rect.left + scrollX, 0); // ensure item is fully visible horizontally
      c.style.top = topOffset + "px";
      c.style.left = leftOffset + "px";

      c.style.width = rect.width + "px";
      c.style.height = rect.height + "px";
      c.style.zIndex = "99999";

      const destRect = dest.getBoundingClientRect();
      const destDirections = {
        top: destRect.top + destRect.height / 2 + scrollY,
        left: destRect.left + destRect.width / 2 + scrollX,
      };

      document.querySelector(".products-list").appendChild(c);

      // calculate distance between start and destination
      const distanceX = destDirections.left - leftOffset;
      const distanceY = destDirections.top - topOffset;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // cdjust animation duration based on distance
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
});

function animateElement(element, styles, duration, callback) {
  const start = performance.now();
  const computedStyles = getComputedStyle(element);
  const initialStyles = {};
  for (const property in styles) {
    initialStyles[property] = parseFloat(computedStyles[property]);
  }
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
