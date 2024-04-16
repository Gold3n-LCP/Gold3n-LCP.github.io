const toggleHamburger = () => {
  document.getElementById("nav-items").classList.toggle("hide");
};
const toggleUser = () => {
  if (document.getElementById("user-info").classList.contains("hide")) {
    console.log("REMOVING");
    document.getElementById("user-info").classList.remove("hide");
  } else {
    console.log("ADDING");
    document.getElementById("user-info").classList.add("hide");
  }
};

const login = () => {
  window.location.href = "home.html";
};

const classic = () => {
  window.location.href = "acdc.html";
};

const grunge = () => {
  window.location.href = "Nirvana.html";
};

if (document.getElementById("loginButton")) {
  document.getElementById("loginButton").onclick = login;
}
if (document.getElementById("grunge-btn")) {
  document.getElementById("grunge-btn").onclick = grunge;
}
if (document.getElementById("classic-btn")) {
  document.getElementById("classic-btn").onclick = classic;
}
if (document.getElementById("hamburger")) {
  document.getElementById("hamburger").onclick = toggleHamburger;
}
if (document.getElementById("user-div")) {
  document.getElementById("user-div").onclick = toggleUser;
}

// Get the contact button element
const contactBtn = document.getElementById("contact-btn");
// Get the modal dialog element
const modal = document.getElementById("dialog");

// Add click event listener to the contact button
contactBtn.addEventListener("click", function () {
  // Show the modal by setting its display style to "block"
  modal.style.display = "block";
});

// Function to close the modal when clicking outside the modal content
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Function to close the modal when clicking the close button (×)
document
  .querySelector(".w3-display-topright")
  .addEventListener("click", function () {
    modal.style.display = "none";
  });
