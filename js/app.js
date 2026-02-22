const progress = new Progress(document.getElementById("progress-container"));

const valueInput = document.getElementById("value-input");
const animateToggle = document.getElementById("animate-toggle");
const hideToggle = document.getElementById("hide-toggle");

valueInput.addEventListener("keydown", (e) => {
    if (e.key === "e" || e.key === '-' || e.key === '+' || e.key === '.') {
        e.preventDefault();
    }
})

valueInput.addEventListener("input", (e) => {
    let value = Number(valueInput.value);
    if (value > 100) {
        valueInput.value = 100;
        value = 100;
    }
    valueInput.value = Number(valueInput.value);
    progress.setValue(value);
})

animateToggle.addEventListener("change", (e) => {
    progress.setAnimated(animateToggle.checked);
})

hideToggle.addEventListener("change", (e) => {
    progress.setHidden(hideToggle.checked);
})

progress.setValue(0);
progress.setHidden(false);
progress.setAnimated(false);