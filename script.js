const trackA = document.getElementById("trackA");
const trackB = document.getElementById("trackB");

const playA = document.getElementById("playA");
const playB = document.getElementById("playB");
const crossfader = document.getElementById("crossfader");

/* =========================
   🔓 AUDIO UNLOCK (MOBILE FIX)
========================= */
function unlockAudio() {
    trackA.volume = 0.5;
    trackB.volume = 0.5;

    // preload / unlock trick
    trackA.play().then(() => trackA.pause()).catch(() => {});
    trackB.play().then(() => trackB.pause()).catch(() => {});
}

document.addEventListener("click", unlockAudio, { once: true });
document.addEventListener("touchstart", unlockAudio, { once: true });

/* =========================
   ▶ PLAY BUTTONS
========================= */
playA.addEventListener("click", () => {
    trackA.currentTime = 0;
    trackA.play().catch(err => console.log("Track A error:", err));
});

playB.addEventListener("click", () => {
    trackB.currentTime = 0;
    trackB.play().catch(err => console.log("Track B error:", err));
});

/* =========================
   🎚 CROSSFADER
========================= */
crossfader.addEventListener("input", () => {
    let value = crossfader.value / 100;

    trackA.volume = 1 - value;
    trackB.volume = value;
});

/* =========================
   🧪 DEBUG (optional but helpful)
========================= */
trackA.addEventListener("error", () => console.log("❌ Track A failed to load"));
trackB.addEventListener("error", () => console.log("❌ Track B failed to load"));
