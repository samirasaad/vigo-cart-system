/************************************ fly item when add to cart animation **************************/
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("add_to_cart")) {
    const p = event.target.parentElement;
    const c = p.querySelector("img").cloneNode(true);
    c.style.position = "absolute";
    c.style.top = p.offsetTop + "px";
    c.style.left = p.offsetLeft + "px";
    c.style.width = p.offsetWidth + "px";
    c.style.height = p.offsetHeight + "px";
    c.style.zIndex = "99999";
    const dest = document.querySelector("#cart-icon")
      ? document.querySelector("#cart-icon")
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
    console.log(document.querySelectorAll(".product"));
  return clearInterval(interval);
  // const c = document.createElement("div");
  // c.innerHTML = `<div className="col-sm-3"><div className="product"><div className="image"><img className="img-fluid" src="https://picsum.photos/400?random&${++number}"/><div className="add_to_cart"><i className="fa fa-plus"></i></div></div><div>Product ${number}</div></div></div>`;
  // document.querySelector(".products-list .row") && document.querySelector(".products-list .row").appendChild(c.firstChild);
}, 100);

function animateElement(element, styles, duration, callback) {
  const start = performance.now();
  console.log("start", start);
  const computedStyles = getComputedStyle(element);
  const initialStyles = {};
  for (const property in styles) {
    initialStyles[property] = parseFloat(computedStyles[property]);
  }
  requestAnimationFrame(function animate(time = 3000) {
    let timeFraction = (time - start) / 1250;
    console.log("time", time);
    if (timeFraction > 1) timeFraction = 1;
    const progress = timeFraction;
    console.log("progress", progress);
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
