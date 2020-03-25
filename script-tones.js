

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

// Tones e f# g a b c d e
const e5 = document.querySelectorAll('.tone-row1');
const d5 = document.querySelectorAll('.tone-row2');
const c5 = document.querySelectorAll('.tone-row3');
const b4 = document.querySelectorAll('.tone-row4');
const a4 = document.querySelectorAll('.tone-row5')
const g4 = document.querySelectorAll('.tone-row6');
const fSharp4 = document.querySelectorAll('.tone-row7');
const e4 = document.querySelectorAll('.tone-row8');

for (let i = 0; i < e5.length; i++) {
    e5[i].addEventListener('click', async () => {
        await Tone.start();
        synth.triggerAttackRelease('E5', '8n').volume.value = 3;
    });
}

for (let i = 0; i < d5.length; i++) {
    d5[i].addEventListener('click', async () => {
        await Tone.start();
        synth.triggerAttackRelease('D5', '8n').volume.value = 3;
    });
}

for (let i = 0; i < c5.length; i++) {
    c5[i].addEventListener('click', async () => {
        await Tone.start();
        synth.triggerAttackRelease('C5', '8n').volume.value = 3;
    });
}

for (let i = 0; i < b4.length; i++) {
    b4[i].addEventListener('click', async () => {
        await Tone.start();
        synth.triggerAttackRelease('B4', '8n').volume.value = 3;
    });
}

for (let i = 0; i < a4.length; i++) {
    a4[i].addEventListener('click', async () => {
        await Tone.start();
        synth.triggerAttackRelease('A4', '8n').volume.value = 3;
    });
}

for (let i = 0; i < g4.length; i++) {
    g4[i].addEventListener('click', async () => {
        await Tone.start();
        synth.triggerAttackRelease('G4', '8n').volume.value = 3;
    });
}
for (let i = 0; i < fSharp4.length; i++) {
    fSharp4[i].addEventListener('click', async () => {
        await Tone.start();
        synth.triggerAttackRelease('F#4', '8n').volume.value = 3;
    });
}
for (let i = 0; i < e4.length; i++) {
    e4[i].addEventListener('click', async () => {
        await Tone.start();
        synth.triggerAttackRelease('E4', '8n').volume.value = 3;
    });
}