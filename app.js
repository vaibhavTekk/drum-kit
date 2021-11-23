const drumkit = document.querySelector('.drumkit');
const html = document.querySelector('html');

const volumeslider = document.querySelector('#volumeslider');
let volume = 0.2;
console.log(volume);

const playsound = function(id){
    link = `./sounds/${id}.wav`;
    const audio = document.createElement('audio');
    audio.src = link;
    audio.volume = volume;
    audio.play();
};

drumkit.addEventListener('click',e =>{
    const id = e.target.id;
    console.log(id);
    if (e.target.id != ''){
        playsound(id);
    }
});

volumeslider.addEventListener('input', e=> {
    volume = e.target.value;
    console.log(volume);
});
