function animation() {
    document.getElementById('img').className = 'christmastree1';
}var r = 100;
var g = 100;
var b = 100;

document.getElementById("tree").addEventListener("click", function() {
    this.style.backgroundColor = "rgb(" + color(r) + "," + color(g) + "," + color(b) + ")";
});

function color(x) {
    if (x > 255) {
        x -= 125;
    } else {
        x += Math.floor(Math.random() * 125);
    }
    return x;
};