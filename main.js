// tady je místo pro náš program
let paragraph = document.querySelector('p');
paragraph.style.fontSize = '16px';

function priKliknuti() {
    paragraph.classList.toggle('red');
}

function priKliknuti2(){
    paragraph.style.fontSize = '17px';
}

let song = document.querySelector('#song');
function play(){
    song.play();
}

function pause(){
    song.pause();
}

function volumeDown(){
    song.volume = 0;
}

function volumeNormal(){
    song.volume = 0.5;
}

function volumeUp(){
    song.volume = 1;
}

function backToStart(){
    song.currentTime = 0;
}