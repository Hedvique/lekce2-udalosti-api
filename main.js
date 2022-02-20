// tady je místo pro náš program
let paragraph = document.querySelector('p');

function onClick() {
    paragraph.classList.toggle('red');
}

function getThick() {
    paragraph.style.fontWeight = ('bold');
}

function getThin() {
    paragraph.style.fontWeight = ('normal')
}

let click = 16;
function onClick2() {
    click++
    paragraph.style.fontSize = click + "px";
}

let song = document.querySelector('#song');
function play() {
    song.play();
}

function pause() {
    song.pause();
}

function volumeDown() {
    song.volume = 0;
}

function volumeNormal() {
    song.volume = 0.5;
}

function volumeUp() {
    song.volume = 1;
}

function backToStart() {
    song.currentTime = 0;
}