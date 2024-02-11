const navItems = document.getElementById("nav-items");
const arrow1 = document.getElementById("arrow-1");
const arrow2 = document.getElementById("arrow-2");
const slider = document.querySelector(".slider");
const slideSpan = document.getElementById("slide-value");
const yogaImg = document.getElementById("yogaImg");

const toggleNav = () => {
  if (navItems.classList.contains("invisible")) {
    navItems.classList.remove("invisible");
    arrow1.classList.add("invisible");
    arrow2.classList.remove("invisible");
  } else {
    navItems.classList.add("invisible");
    arrow1.classList.remove("invisible");
    arrow2.classList.add("invisible");
  }
};

const show1 = () => {
  document.getElementById("ex1").classList.remove("invisible");
  document.getElementById("ex2").classList.add("invisible");
};
const show2 = () => {
  document.getElementById("ex2").classList.remove("invisible");
  document.getElementById("ex1").classList.add("invisible");
};

const showCommand = () => {
  const comm = document
    .getElementById("txt-comm")
    .value.slice(-1)
    .toLowerCase()
    .trim();
  const commImg = document.getElementById("commImg");

  if (comm === "b") {
    commImg.src = "images/read.jpg";
  } else if (comm === "c") {
    commImg.src = "images/clown.jpg";
  } else if (comm === "p") {
    commImg.src = "images/birthday.jpg";
  } else if (comm === "r") {
    commImg.src = "images/rain.jpg";
  } else if (comm === "s") {
    commImg.src = "images/shovel.jpg";
  } else if (comm === "w") {
    commImg.src = "images/work.jpg";
  }
};

slider.addEventListener("input", () => {
  if (slider.value <= 12.5) {
    yogaImg.src = "images/yoga1.jpg";
  } else if (slider.value <= 25) {
    yogaImg.src = "images/yoga2.jpg";
  } else if (slider.value <= 37.5) {
    yogaImg.src = "images/yoga3.jpg";
  } else if (slider.value <= 50) {
    yogaImg.src = "images/yoga4.jpg";
  } else if (slider.value <= 62.5) {
    yogaImg.src = "images/yoga5.jpg";
  } else if (slider.value <= 75) {
    yogaImg.src = "images/yoga6.jpg";
  } else if (slider.value <= 87.5) {
    yogaImg.src = "images/yoga7.jpg";
  } else if (slider.value > 87.5) {
    yogaImg.src = "images/yoga8.jpg";
  }
});
document.getElementById("arrow-1").onclick = toggleNav;
document.getElementById("arrow-2").onclick = toggleNav;
document.getElementById("txt-comm").onkeyup = showCommand;
document.getElementById("exercise1").onclick = show1;
document.getElementById("big1").onclick = show1;
document.getElementById("exercise2").onclick = show2;
document.getElementById("big2").onclick = show2;
