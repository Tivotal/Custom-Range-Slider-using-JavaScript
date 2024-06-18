/* Created by Tivotal */

let val1 = document.querySelector(".value1");
let val2 = document.querySelector(".value2");
let slider1 = document.querySelector(".slider1");
let slider2 = document.querySelector(".slider2");
let sliderTrack = document.querySelector(".track");

let minVal = 0;
let maxVal = slider1.max;

let calcOne = () => {
  if (parseInt(slider2.value) - parseInt(slider1.value) <= minVal) {
    slider1.value = parseInt(slider2.value) - minVal;
  }

  val1.textContent = slider1.value;

  updateTrack();
};

let calcTwo = () => {
  if (parseInt(slider2.value) - parseInt(slider1.value) <= minVal) {
    slider2.value = parseInt(slider1.value) + minVal;
  }

  val2.textContent = slider2.value;
  updateTrack();
};

slider1.addEventListener("input", calcOne);
slider2.addEventListener("input", calcTwo);

let updateTrack = () => {
  perOne = (slider1.value / maxVal) * 100;
  perTwo = (slider2.value / maxVal) * 100;

  sliderTrack.style.background = `linear-gradient(
    to right,
    #dadae5 ${perOne}%,
    #3264fe ${perOne}%,
    #3264fe ${perTwo}%,
    #dadae5 ${perTwo}%
  )`;
};
