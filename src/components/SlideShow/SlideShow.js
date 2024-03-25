import React, { useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import "./SlideShow.scss";

const Example = ({ samplesList }) => {
  let slideIndex = 1;

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  const plusSlides = (n) => {
    console.log(n);
    showSlides((slideIndex += n));
  };

  const currentSlide = (n) => {
    showSlides((slideIndex = n));
  };

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log("slides[slideIndex - 1]", slides[slideIndex - 1]);
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      //   captionText.innerHTML = dots[slideIndex - 1].alt;
    }
  };

  return (
    <>
      <div class="slide-show-wrapper container">
        {samplesList.map((sample) => (
          <div class="mySlides">
            <div
            class='main-slide'
              style={{
                backgroundImage: `url(${sample})`,
              }}
            ></div>
            {/* <img src={sample} style={{ width: "100%" }} /> */}
          </div>
        ))}

        <p class="prev" onClick={() => plusSlides(-1)}>
          ❮
        </p>
        <p class="next" onClick={() => plusSlides(1)}>
          ❯
        </p>

        <div class="row container">
          {samplesList.map((sample, index) => (
            <div
              class={`demo col-${samplesList.length - 1}`}
              style={{
                backgroundImage: `url(${sample})`,
              }}
              onClick={() => currentSlide(index + 1)}
            >
              {/* <div
                style={{
                  backgroundImage: `url(${sample})`,
                }}
                class="demo"
                onClick={() => currentSlide(index + 1)}
              ></div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Example;
