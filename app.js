const drumkit = document.querySelector('.drumkit');
const html = document.querySelector('html');

const playsound = function(id){
    link = `./sounds/${id}.wav`;
    const audio = document.createElement('audio');
    audio.src = link;
    audio.volume = 0.2;
    audio.play();
};

drumkit.addEventListener('click',e =>{
    const id = e.target.id;
    if (e.target.id != ''){
        playsound(id);
    }
});

