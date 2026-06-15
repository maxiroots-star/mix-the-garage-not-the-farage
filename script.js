const trackA = document.getElementById("trackA");
const trackB = document.getElementById("trackB");

const playA = document.getElementById("playA");
const playB = document.getElementById("playB");
const crossfader = document.getElementById("crossfader");

/* FORCE AUDIO UNLOCK */
function unlock() {
    trackA.volume = 0.5;
    trackB.volume = 0.5;

    // preload trick
    trackA.play().then(() => trackA.pause()).catch(()=>{});
    trackB.play().then(() => trackB.pause()).catch(()=>{});
}

document.addEventListener("click", unlock, { once: true });
document.addEventListener("touchstart", unlock, { once: true });

/* PLAY BUTTONS */
playA.addEventListener("click", () => {
    trackA.currentTime = 0;
    trackA.play();
});

playB.addEventListener("click", () => {
    trackB.currentTime = 0;
    trackB.play();
});

/* CROSSFADER */
crossfader.addEventListener("input", () => {
    let v = crossfader.value / 100;

    trackA.volume = 1 - v;
    trackB.volume = v;
});
