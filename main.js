// tady je místo pro náš program
let paragraph = document.querySelector('p');
paragraph.style.fontSize = '16px';

function priKliknuti() {
    paragraph.classList.toggle('red');
}

function ztučni(){
    paragraph.style.fontWeight = ('bold');
}

function ztenči(){
    paragraph.style.fontWeight = ('normal')
}

function priKliknuti2(){
    let computedSize = window.getComputedStyle(paragraph, null).getPropertyValue('font-size');
    paragraph.style.fontSize = (parseFloat(computedSize) + 1) + 'px';
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