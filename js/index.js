const slider = document.querySelector(".social-img");
const slider2 = document.querySelector(".slider2");
const slider3 = document.querySelector(".slider3");
const slider4 = document.querySelector(".slider4");
const sliderText = document.querySelector(".text-slider");
const sliderText2 = document.querySelector(".text-slider2");
const sliderText3 = document.querySelector(".text-slider3");
const sliderText4 = document.querySelector(".text-slider4");

slider.addEventListener("mouseover", () =>{
    sliderText.classList.toggle("text-render")
});

slider.addEventListener("mouseout", () =>{
    sliderText.classList.toggle("text-render")
});

slider2.addEventListener("mouseover", () =>{
    sliderText2.classList.toggle("text-render")
});

slider2.addEventListener("mouseout", () =>{
    sliderText2.classList.toggle("text-render")
});


slider3.addEventListener("mouseover", () =>{
    sliderText3.classList.toggle("text-render")
});

slider3.addEventListener("mouseout", () =>{
    sliderText3.classList.toggle("text-render")
});

slider4.addEventListener("mouseover", () =>{
    sliderText4.classList.toggle("text-render")
});

slider4.addEventListener("mouseout", () =>{
    sliderText4.classList.toggle("text-render")
});