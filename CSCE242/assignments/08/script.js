const navItems = document.getElementById("nav-items");
    const arrow1 = document.getElementById("arrow-1");
    const arrow2 = document.getElementById("arrow-2");
    
    const startNav = () => {
    navItems.style.display = 'none';
    navItems.classList.add('invisible');
    arrow1.style.display = 'none';
    arrow2.style.display = 'block';
};


const toggleNav = () => {
    if (navItems.style.display === 'none' || navItems.classList.contains('invisible')) {
        navItems.style.display = 'block';
        navItems.classList.remove('invisible');
        arrow1.style.display = 'none';
        arrow2.style.display = 'block';
    } else {
        navItems.style.display = 'none';
        navItems.classList.add('invisible');
        arrow1.style.display = 'none';
        arrow2.style.display = 'block';
    }
};



const showNav = () => {
    document.getElementById("nav-items").classList.toggle('invisible');
    document.getElementById("arrow-2").classList.toggle('invisible');
    document.getElementById("arrow-1").style.display = 'block';
};
const hideNav = () => {
    document.getElementById("nav-items").style.display = 'block';
    document.getElementById("arrow-2").style.display = 'block';
    document.getElementById("arrow-1").classList.toggle('invisible');
};


const showCommand = () => {
    const comm = document.getElementById("txt-comm").value.slice(-1).toLowerCase().trim();
    const commImg = document.getElementById("commImg");
    

    if(comm === "b") {
        commImg.src = 'images/read.jpg';
    }
    else if(comm === "c") {
        commImg.src = 'images/clown.jpg';
    }
    else if(comm === "p") {
        commImg.src = 'images/birthday.jpg';
    }
    else if(comm === "r") {
        commImg.src = 'images/rain.jpg';
    }
    else if(comm === "s") {
        commImg.src = 'images/shovel.jpg';
    }
    else if(comm === "w") {
        commImg.src = 'images/work.jpg';
    }
};

const slider = document.querySelector('.slider');
const slideSpan = document.getElementById('slide-value');
const yogaImg = document.getElementById("yogaImg");


slider.addEventListener('input', () => {
    if(slider.value <= 12.5 ) {
        yogaImg.src = 'images/yoga1.jpg'
    }
    else if(slider.value <= 25) {
        yogaImg.src = 'images/yoga2.jpg'
    }
    else if(slider.value <= 37.5) {
        yogaImg.src = 'images/yoga3.jpg'
    }
    else if(slider.value <= 50) {
        yogaImg.src = 'images/yoga4.jpg'
    }
    else if(slider.value <= 62.5) {
        yogaImg.src = 'images/yoga5.jpg'
    }
    else if(slider.value <= 75) {
        yogaImg.src = 'images/yoga6.jpg'
    }
    else if(slider.value <= 87.5) {
        yogaImg.src = 'images/yoga7.jpg'
    }
    else if(slider.value > 87.5) {
        yogaImg.src = 'images/yoga8.jpg'
    }
    
});
document.getElementById("main-nav").onload = startNav;
document.getElementById("arrow-1").onclick = toggleNav;
document.getElementById("arrow-2").onclick = toggleNav;
document.getElementById("txt-comm").onkeyup = showCommand;
