let updateCount;
let counter = 0;
let direction = 1;

const startStopCount = (e) => {
  const ball = document.getElementById("ball");
  const location = document.getElementById("ball-margin");

  if (e.target.innerHTML.toLowerCase() == "start") {
    e.target.innerHTML = "Stop";

    updateCount = setInterval(() => {
      if (direction === 1) {
        counter++;
      } else {
        counter--;
      }

      if (counter < 600 && counter > 0) {
        ball.style.marginTop = counter + "px";
        ball.style.transform = `rotate(${counter}deg)`;
      } else {
        direction *= -1;
      }
    }, 2);
  } else {
    e.target.innerHTML = "Start";
    clearInterval(updateCount);
  }
};

const poseDetails = (e) => {
  const yogaTxt = e.target;
  console.log(yogaTxt);
  let description = yogaTxt.getAttribute("rel");
  console.log(description);
  yogaTxt.nextElementSibling.textContent = description;
};

document.getElementById("btn-bounce").onclick = startStopCount;
document.querySelectorAll("#yoga-poses li").forEach((li) => {
  li.onclick = poseDetails;
});
