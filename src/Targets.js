/* global Color */

function createColorTarget(color) {
    let el = document.createElement("span");
    el.classList.add("element");
    el.style.backgroundColor = color.asCSSString();
    el.style.borderColor = color.asCSSString();
    return el;
}

// eslint-disable-next-line no-unused-vars
class TargetContainer {

    constructor(el) {
        this.el = el;
    }

    update(numberOfTargets, colorDeviation) {
        let randomColor = Color.createRandomColor(),
            targetColor = Color.createColorWithDeviation(randomColor, colorDeviation),
            elementList = [];
        elementList.push(createColorTarget(targetColor));
        elementList[0].setAttribute("data-is-correct-target", "true");
        for (let i = 1; i < numberOfTargets; i++) {
            elementList.push(createColorTarget(randomColor));
        }
        elementList.sort(() => 0.5 - Math.random());
        this.el.innerHTML = "";
        this.el.append(...elementList);
    }

    setOnTargetClickedListener(callback) {
        this.el.addEventListener("click", (event) => {
            if (event.target.classList.contains("element")) {
                callback(event.target.hasAttribute("data-is-correct-target"));
            }
        });
    }
}