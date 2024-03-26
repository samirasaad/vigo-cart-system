// /************************************ fly item when add to cart animation **************************/
// document.addEventListener("click", function (event) {
//   //clicked element has child with class add to cart
//   let c;
//   let p;
//   console.log(event.target);
//   if (event.target.classList.contains("add_to_cart")) {
//     p = event.target.parentElement.parentElement;
//     /* or clicked element is a 0deep level child , 
//     get the upper parent and get the imag element inside it to be cloned*/
//   } else {
//     p = event.target.closest(".card");
//   }
  
//   // make copy of clicked product
//   if (p) {
//     c = p.querySelector("img").cloneNode(true);
//     c.style.position = "absolute";
//     c.style.top = p.offsetTop + "px";
//     c.style.left = p.offsetLeft + "px";
//     c.style.width = p.offsetWidth + "px";
//     c.style.height = p.offsetHeight + "px";
//     c.style.zIndex = "99999";

//     console.log('p',p)
//     console.log("p.style.top", p.style.top);
//     console.log("p.style.left", p.style.left);
//     console.log("p.style.width", p.style.width);
//     console.log("p.style.height", p.style.height);

//     console.log("c.style.top", c.style.top);
//     console.log(" c.style.left", c.style.left);
//     console.log(" c.style.width", c.style.width);
//     console.log("c.style.height", c.style.height);

//     // destination [cart icon in navbar]
//     const dest = document.querySelector("#destinaion-cart-icon")
//       ? document.querySelector("#destinaion-cart-icon")
//       : "";
//     const destDirections = {
//       top: `${dest.offsetTop + dest.offsetHeight / 2}`,
//       left: `${dest.offsetLeft + dest.offsetWidth / 2}`,
//     };

//     document.querySelector(".products-list") &&
//       document.querySelector(".products-list").appendChild(c);
//     animateElement(
//       c,
//       {
//         top: destDirections.top,
//         left: destDirections.left,
//         width: "0",
//         height: "0",
//         opacity: "0",
//       },
//       1200,
//       function () {
//         c.remove();
//       }
//     );
//   }
// });

// let number = document.querySelectorAll(".product").length;
// const interval = setInterval(function () {
//   if (document.querySelectorAll(".product").length > 1)
//     return clearInterval(interval);
// }, 100);

// function animateElement(element, styles, duration, callback) {
//   const start = performance.now();
//   const computedStyles = getComputedStyle(element);
//   const initialStyles = {};
//   for (const property in styles) {
//     initialStyles[property] = parseFloat(computedStyles[property]);
//   }
//   requestAnimationFrame(function animate(time = 3000) {
//     let timeFraction = (time - start) / 1250;
//     if (timeFraction > 1) timeFraction = 1;
//     const progress = timeFraction;
//     for (const property in styles) {
//       element.style[property] =
//         initialStyles[property] +
//         (styles[property] - initialStyles[property]) * progress +
//         (property === "opacity" ? "" : "px");
//     }
//     if (timeFraction < 1) {
//       requestAnimationFrame(animate);
//     } else {
//       if (callback) callback();
//     }
//   });
// }

document.addEventListener("click", function (event) {
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

    // Adjust position based on scroll
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    c.style.top = rect.top + scrollY + "px";
    c.style.left = rect.left + scrollX + "px";

    c.style.width = rect.width + "px";
    c.style.height = rect.height + "px";
    c.style.zIndex = "99999";

    // Destination (cart icon)
    const dest = document.querySelector("#destinaion-cart-icon");
    const destRect = dest.getBoundingClientRect();
    const destDirections = {
      top: destRect.top + destRect.height / 2 + scrollY,
      left: destRect.left + destRect.width / 2 + scrollX,
    };

    document.querySelector(".products-list").appendChild(c);

    // Calculate distance between start and destination
    const distanceX = destDirections.left - parseInt(c.style.left, 10);
    const distanceY = destDirections.top - parseInt(c.style.top, 10);
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // Adjust animation duration based on distance
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
