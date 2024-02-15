const numLoop = () => {
  const numList = document.getElementById("num-list");
  const errorP = document.getElementById("error-nums");
  errorP.innerHTML = "";
  numList.innerHTML = "";

  //Get Starting and Ending numbers
  let startNum = document.getElementById("txt-start-num").value;
  let endNum = document.getElementById("txt-end-num").value;

  if (
    isNaN(startNum) ||
    isNaN(endNum) ||
    startNum.trim() == "" ||
    endNum.trim() == ""
  ) {
    errorP.innerHTML = "You must ender number(s)";
    return;
  }
  startNum = parseInt(startNum);
  endNum = parseInt(endNum);

  if (startNum >= endNum) {
    errorP.innerHTML("Ending number must be larger than starting number");
    return;
  }

  //Create an li for each number and append it to the list
  for (let i = startNum; i <= endNum; i++) {
    const li = document.createElement("li");
    li.innerHTML = i;
    numList.append(li);
  }
};

let updateCount;
let counter = 0;

const startStopCount = (e) => {
  const countP = document.getElementById("count-p");

  if (e.target.innerHTML.toLowerCase() == "start") {
    e.target.innerHTML = "Stop";

    updateCount = setInterval(() => {
      counter++;
      countP.innerHTML = counter;
    }, 100);
  } else {
    e.target.innerHTML = "Start";
    clearInterval(updateCount);
  }
};

const showDetails = (e) => {
  console.log(e.target.getAttribute("rel"));
};

document.getElementById("btn-loop-nums").onclick = numLoop;
document.getElementById("btn-count").onclick = startStopCount;
document.querySelectorAll("#toys li").forEach((li) => {
  li.onclick = showDetails;
});
