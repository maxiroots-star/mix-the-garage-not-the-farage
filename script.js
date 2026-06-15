
const trackA = document.getElementById("trackA");
const trackB = document.getElementById("trackB");

const playA = document.getElementById("playA");
const playB = document.getElementById("playB");

const crossfader = document.getElementById("crossfader");

/* START AUDIO ON FIRST TAP (mobile fix) */
document.body.addEventListener("click", () => {
    trackA.volume = 0.5;
    trackB.volume = 0.5;
}, { once: true });

/* PLAY BUTTONS */
playA.addEventListener("click", () => {
    trackA.play();
});

playB.addEventListener("click", () => {
    trackB.play();
});

/* CROSSFADER LOGIC */
crossfader.addEventListener("input", () => {

    let value = crossfader.value; // 0 - 100

    let volumeA = 1 - (value / 100);
    let volumeB = value / 100;

    trackA.volume = volumeA;
    trackB.volume = volumeB;
});
