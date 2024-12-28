// function carTrackPreview() {
//     const div = document.getElementById("chaser-track");

//     div.classList.add("fade-out");

//     setTimeout(() => {
//         div.style.backgroundImage = "url(../assets/img/chaser-track.png)";

//         div.classList.remove("fade-out");
//         div.classList.add("fade-in");
//     }, 200);
// }

// function engineTrackPreview() {
//     const div = document.getElementById("chaser-track");

//     div.classList.add("fade-out");

//     setTimeout(() => {
//         div.style.backgroundImage = "url(../assets/img/chaser-track-engine.png)";

//         div.classList.remove("fade-out");
//         div.classList.add("fade-in");
//     }, 200); 
// }

// function wheelTrackPreview() {
//     const div = document.getElementById("chaser-track");

//     div.classList.add("fade-out");

//     setTimeout(() => {
//         div.style.backgroundImage = "url(../assets/img/chaser-track-wheel.png)";

//         div.classList.remove("fade-out");
//         div.classList.add("fade-in");
//     }, 200); 
// }

function carTrackPreview() {
    document.getElementById("chaser-track").style.backgroundImage = "url('../assets/img/chaser-track.png')";
 }

 function engineTrackPreview() {
    document.getElementById("chaser-track").style.backgroundImage = "url('../assets/img/chaser-track-engine.png')";
 }

function wheelTrackPreview() {
    document.getElementById("chaser-track").style.backgroundImage = "url('../assets/img/chaser-track-wheel.png')";
 }
