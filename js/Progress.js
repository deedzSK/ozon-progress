class Progress {
    constructor(container) {
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("width", "200");
        this.svg.setAttribute("height", "200");
        this.svg.setAttribute("viewBox", "0 0 200 200");

        const bgCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        bgCircle.setAttribute("cx", "100");
        bgCircle.setAttribute("cy", "100");
        bgCircle.setAttribute("r", "80");
        bgCircle.setAttribute("fill", "none");
        bgCircle.setAttribute("stroke", "#e6e6e6");
        bgCircle.setAttribute("stroke-width", "12");

        this.frCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.frCircle.setAttribute("cx", "100");
        this.frCircle.setAttribute("cy", "100");
        this.frCircle.setAttribute("r", "80");
        this.frCircle.setAttribute("fill", "none");
        this.frCircle.setAttribute("stroke", "#005DFF");
        this.frCircle.setAttribute("stroke-width", "12");
        this.frCircle.setAttribute("stroke-dasharray", "502.65 502.65");
        this.frCircle.setAttribute("stroke-dashoffset", "125.66");
        this.frCircle.setAttribute("transform", "rotate(-90 100 100)");

        this.svg.appendChild(bgCircle);
        this.svg.appendChild(this.frCircle);

        container.appendChild(this.svg);
    }
    setValue(value) {
        this.frCircle.setAttribute("stroke-dashoffset", `${502.65 - (502.65 * value / 100)}`);
    }
    setHidden(isHidden) {
        this.svg.style.display = isHidden ? "none" : "block";
    }
    setAnimated(isAnimated) {
        if (isAnimated) {
            this.svg.classList.add("progress-animated");
        } else {
            this.svg.classList.remove("progress-animated");
        }
    }
}

