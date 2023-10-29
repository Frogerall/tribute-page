let navBar = document.querySelector(".nav-menu");
let menuToggle = document.querySelector(".nav-toggler");
let hide = document.querySelector(".hide");

function handleOutsideClick(event) {
  if (navBar.classList.contains("open") && !navBar.contains(event.target)) {
    navBar.classList.remove("open");
    document.body.removeEventListener("click", handleOutsideClick);
  }
}

menuToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  navBar.classList.toggle("open");
  if (navBar.classList.contains("open")) {
    document.body.addEventListener("click", handleOutsideClick);
  } else {
    document.body.removeEventListener("click", handleOutsideClick);
  }
});

hide.addEventListener("click", (event) => {
  event.stopPropagation();
  navBar.classList.remove("open");
  document.body.removeEventListener("click", handleOutsideClick);
});
