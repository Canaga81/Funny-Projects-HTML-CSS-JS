const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {

    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {

        const music = document.getElementById(sound);
        
        pause();

        music.play();

    });

    const buttons = document.getElementById('buttons')

    buttons.appendChild(btn);

});

const pause = () => {

    sounds.forEach((sound) => {

        const song = document.getElementById(sound);

        song.pause();

    });

}