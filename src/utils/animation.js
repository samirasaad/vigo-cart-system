/************************************ fly item when add to cart animation **************************/
document.addEventListener("click", function (event) {
  //clicked element has child with class add to cart
  let c;
  let p;
  if (event.target.classList.contains("add_to_cart")) {
    p = event.target.parentElement.parentElement;
    /* or clicked element is a 0deep level child , 
    get the upper parent and get the imag element inside it to be cloned*/
  } else {
    p = event.target.closest(".card");
  }
  
  if (p) {
    c = p.querySelector("img").cloneNode(true);
    c.style.position = "absolute";
    c.style.top = p.offsetTop + "px";
    c.style.left = p.offsetLeft + "px";
    c.style.width = p.offsetWidth + "px";
    c.style.height = p.offsetHeight + "px";
    c.style.zIndex = "99999";
    const dest = document.querySelector("#destinaion-cart-icon")
      ? document.querySelector("#destinaion-cart-icon")
      : "";
    const destDirections = {
      top: `${dest.offsetTop + dest.offsetHeight / 2}`,
      left: `${dest.offsetLeft + dest.offsetWidth / 2}`,
    };

    document.querySelector(".products-list") &&
      document.querySelector(".products-list").appendChild(c);
    animateElement(
      c,
      {
        top: destDirections.top,
        left: destDirections.left,
        width: "0",
        height: "0",
        opacity: "0",
      },
      1200,
      function () {
        c.remove();
      }
    );
  }
});

let number = document.querySelectorAll(".product").length;
const interval = setInterval(function () {
  if (document.querySelectorAll(".product").length > 1)
    return clearInterval(interval);
}, 100);

function animateElement(element, styles, duration, callback) {
  const start = performance.now();
  const computedStyles = getComputedStyle(element);
  const initialStyles = {};
  for (const property in styles) {
    initialStyles[property] = parseFloat(computedStyles[property]);
  }
  requestAnimationFrame(function animate(time = 3000) {
    let timeFraction = (time - start) / 1250;
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
