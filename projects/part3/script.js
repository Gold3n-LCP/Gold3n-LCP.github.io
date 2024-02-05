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
    
    
    document.getElementById("loginButton").addEventListener("click",login);
        document.getElementById("grunge-btn").addEventListener("click",grunge);
        document.getElementById("classic-btn").addEventListener("click", classic);

    
