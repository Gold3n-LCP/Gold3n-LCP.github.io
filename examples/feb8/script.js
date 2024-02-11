let pos = 0;

const colorSquare = () => {
    document.getElementById("square").classList.add("rainbow");
    //document.querySelector("#square")
};

const moveDown = () => {
    pos += 10;
    const root = document.querySelector(":root");
    root.style.setProperty("--square-top", pos + "px");
};

const addCircle = () => {
    //input a valid color
    const color = document.getElementById("txt-color").value;
    //change color of all the balls
    //const root = document.querySelector(":root");
    //root.style.setProperty("--ball-color", color);

    const playground = document.getElementById("circle-playground");

    //playground.innerHTML += "<section class='circle'></section>";

    const ball = document.createElement("section");
    playground.append(ball);
    ball.classList.add("circle");
    //changes color of 1 ball
    ball.style.background = color;

};

const updateThermometer = () => {
    console.log("update");
    const goal = 10000;
    const funds = document.getElementById("txt-funds").value;
    console.log(funds);
    const errorSpan = document.getElementById("funds-error");
    errorSpan.innerHTML = "";
    const therm = document.getElementById("thermometer");

    /** Error */
    if(isNaN(funds)) {
        errorSpan.innerHTML = "* NOT a valid number";
        return;
    }
    else if(funds<0) {
        errorSpan.innerHTML = "* Negative Number"
        return;
    }

    const percent = funds / goal * 100;
    document.querySelector(":root").style.setProperty('--funds', percent + "%");
};

const evalForm = () => {
    e.preventdefault();
    console.log("test");
};

document.getElementById("my-form").onsubmit = evalForm;

document.getElementById("btn-color").onclick = colorSquare;
document.getElementById("btn-move-down").onclick = moveDown;
document.getElementById("btn-add-circle").onclick = addCircle;
document.getElementById("btn-cont").onclick = updateThermometer;