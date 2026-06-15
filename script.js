const trackA = document.getElementById("trackA");
const trackB = document.getElementById("trackB");

const playA = document.getElementById("playA");
const playB = document.getElementById("playB");

const crossfader = document.getElementById("crossfader");

/* MOBILE AUDIO UNLOCK */
document.body.addEventListener("click", () => {
    trackA.volume = 0.5;
    trackB.volume = 0.5;
}, { once: true });

/* PLAY BUTTONS */
playA.onclick = () => {
    trackA.play();
};

playB.onclick = () => {
    trackB.play();
};

/* CROSSFADER */
crossfader.oninput = () => {
    let v = crossfader.value / 100;

    trackA.volume = 1 - v;
    trackB.volume = v;
};
