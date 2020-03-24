const synth = new Tone.Synth({
    oscillator: {
        type: 'sine'
    },
    envelope: {
        attack: 0.01,
        decay: 0.2,
        sustain: 0.4,
        release: 0.5
    }
}).toMaster();

// Tones e f# g# b c#
const cSharp4 = document.querySelectorAll('.tone-row1');
const b3 = document.querySelectorAll('.tone-row2');
const gSharp3 = document.querySelectorAll('.tone-row3');
const fSharp3 = document.querySelectorAll('.tone-row4');
const e3 = document.querySelectorAll('.tone-row5');

for (let i = 0; i < cSharp4.length; i++) {
    cSharp4[i].addEventListener('click', async () => {
        await Tone.start();
        synth.triggerAttackRelease('C#4', '8n').volume.value = 3;
    });
}
for (let i = 0; i < b3.length; i++) {
    b3[i].addEventListener('click', async () => {
        await Tone.start();
        synth.triggerAttackRelease('B3', '8n').volume.value = 3;
    });
}
for (let i = 0; i < gSharp3.length; i++) {
    gSharp3[i].addEventListener('click', async () => {
        await Tone.start();
        synth.triggerAttackRelease('G#3', '8n').volume.value = 3;
    });
}
for (let i = 0; i < fSharp3.length; i++) {
    fSharp3[i].addEventListener('click', async () => {
        await Tone.start();
        synth.triggerAttackRelease('F#3', '8n').volume.value = 3;
    });
}
for (let i = 0; i < e3.length; i++) {
    e3[i].addEventListener('click', async () => {
        await Tone.start();
        synth.triggerAttackRelease('E3', '8n').volume.value = 3;
    });
}