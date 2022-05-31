
function createRandomPastelChannel() {
    // eslint-disable-next-line no-magic-numbers
    return Math.floor(((Math.random() * 256) + 255) / 2); 
}

// eslint-disable-next-line no-unused-vars
class Color {

    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        Object.freeze(this);
    }

    asCSSString() {
        return `rgb(${this.red},${this.green},${this.blue})`;
    }

    static createRandomColor() {
        let red = createRandomPastelChannel(),
            green = createRandomPastelChannel(),
            blue = createRandomPastelChannel();
        return new Color(red, green, blue);
    }

    static createColorWithDeviation(color, deviation) {
        return new Color(color.red - deviation, color.green - deviation, color.blue - deviation);
    }

}