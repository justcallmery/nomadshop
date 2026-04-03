const toggle = document.getElementById("menu-toggle");
const drawer = document.getElementById("drawer");
const closeBtn = document.getElementById("close");
const overlay = document.getElementById("overlay");

toggle.addEventListener("click", () => {
  drawer.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  drawer.classList.remove("active");
  overlay.classList.remove("active");
}
