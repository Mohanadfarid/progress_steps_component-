const progress_bar = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const previous_button = document.getElementById("pbtn");
const next_button = document.getElementById("nbtn");
let progress = 1;

next_button.addEventListener("click", () => {
  progress++;
  if (progress > circles.length) {
    progress = circles.length;
  }
  update_gui();
});

previous_button.addEventListener("click", () => {
  progress--;
  if (progress < 1) {
    progress = 1;
  }
  update_gui();
});

function update_gui() {
  circles.forEach((circle, index) => {
    if (index < progress) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  progress_bar.style.width = (progress - 1) * 20 + "%";
  handel_buttons();
}
function handel_buttons() {
  if (progress === 1) {
    previous_button.disabled = true;
  } else if (progress === circles.length) {
    next_button.disabled = true;
  } else {
    previous_button.disabled = false;
    next_button.disabled = false;
  }
}
