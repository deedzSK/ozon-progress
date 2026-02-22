const svgSize = 150;
const strokeWidth = 12;
const radius = (svgSize / 2) - (strokeWidth / 2) - 1;
const circumference = 2 * Math.PI * radius;

class Progress {
    constructor(container) {
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("width", `${svgSize}`);
        this.svg.setAttribute("height", `${svgSize}`);
        this.svg.setAttribute("viewBox", `0 0 ${svgSize} ${svgSize}`);

        const bgCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        bgCircle.setAttribute("cx", `${svgSize / 2}`);
        bgCircle.setAttribute("cy", `${svgSize / 2}`);
        bgCircle.setAttribute("r", `${radius}`);
        bgCircle.setAttribute("fill", "none");
        bgCircle.setAttribute("class", "progress-track");
        bgCircle.setAttribute("stroke-width", `${strokeWidth}`);

        this.frCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.frCircle.setAttribute("cx", `${svgSize / 2}`);
        this.frCircle.setAttribute("cy", `${svgSize / 2}`);
        this.frCircle.setAttribute("r", `${radius}`);
        this.frCircle.setAttribute("fill", "none");
        this.frCircle.setAttribute("class", "progress-primary");
        this.frCircle.setAttribute("stroke-width", `${strokeWidth}`);
        this.frCircle.setAttribute("stroke-dasharray", `${circumference} ${circumference}`);
        this.frCircle.setAttribute("stroke-dashoffset", `${circumference}`);
        this.frCircle.setAttribute("transform", `rotate(-90 ${svgSize / 2} ${svgSize / 2})`);

        this.svg.appendChild(bgCircle);
        this.svg.appendChild(this.frCircle);

        container.appendChild(this.svg);
    }
    setValue(value) {
        value = Math.min(100, Math.max(0, value));
        this.frCircle.setAttribute("stroke-dashoffset", `${circumference - (circumference * value / 100)}`);
    }
    setHidden(isHidden) {
        this.svg.style.visibility = isHidden ? "hidden" : "visible";
    }
    setAnimated(isAnimated) {
        if (isAnimated) {
            this.svg.classList.add("progress-animated");
        } else {
            this.svg.classList.remove("progress-animated");
        }
    }
}

