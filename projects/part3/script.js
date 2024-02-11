const toggleHamburger = () => {
        document.getElementById("nav-items").classList.toggle("hide");
};

const login = () => {
        window.location.href = 'home.html';
};

const classic = () => {
        window.location.href = 'acdc.html';
};

const grunge = () => {
        window.location.href = 'Nirvana.html';
}


window.onload = () => {
        document.getElementById("hamburger").onclick = toggleHamburger;
};


document.getElementById("grunge-btn").onclick = grunge;
document.getElementById("classic-btn").onclick = classic;
document.getElementById("loginButton").onclick = login;