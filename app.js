const drumkit = document.querySelector('.drumkit');
const html = document.querySelector('html');

const volumeslider = document.querySelector('#volumeslider');
let volume = 0.2;


const playsound = function(id){
    link = `./sounds/${id}.wav`;
    const audio = document.createElement('audio');
    audio.src = link;
    audio.volume = volume;
    audio.play();
};

drumkit.addEventListener('click',e =>{
    const id = e.target.id;
    if (e.target.id != ''){
        playsound(id);
    }
});

volumeslider.addEventListener('input', e=> {
    volume = e.target.value;
});

html.addEventListener('keydown' , e => {
    const keypress = e.key.toUpperCase();
    switch(keypress){
        case 'A':
            playsound('boom');
            break
        case 'S':
            playsound('clap');
            break
        case 'D':
            playsound('hihat');
            break
        case 'F':
            playsound('kick');
            break
        case 'G':
            playsound('openhat');
            break
        case 'H':
            playsound('ride');
            break
        case 'J':
            playsound('snare');
            break
        case 'K':
            playsound('tink');
            break
        case 'L':
            playsound('tom');
            break
    }

});