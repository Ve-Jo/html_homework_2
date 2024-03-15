let checkboxes = document.querySelectorAll('.task input[type="checkbox"]');
for (const checkbox of checkboxes) {
  checkbox.addEventListener("change", function () {
    let task = this.parentElement;
    if (this.checked) {
      task.style.backgroundColor = "#c6c6c6";
    } else {
      let i = Array.from(checkboxes).indexOf(this);

      if (i % 2 !== 0) {
        task.style.backgroundColor = "rgb(173, 217, 230)";
      } else {
        task.style.backgroundColor = "rgb(165, 204, 219)";
      }
    }
  });
}
