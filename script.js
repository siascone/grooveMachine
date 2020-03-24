const synth = new Tone.Synth().toMaster();

// Tones e f# g# b c#
document.querySelector('.tone-row1').addEventListener('click', async () => {
    await Tone.start();
    synth.triggerAttackRelease('C#4', '8n');
});

document.querySelector('.tone-row2').addEventListener('click', async () => {
    await Tone.start();
    synth.triggerAttackRelease('B3', '8n');
});

document.querySelector('.tone-row3').addEventListener('click', async () => {
    await Tone.start();
    synth.triggerAttackRelease('G#3', '8n');
});

document.querySelector('.tone-row4').addEventListener('click', async () => {
    await Tone.start();
    synth.triggerAttackRelease('F#3', '8n');
});

document.querySelector('.tone-row5').addEventListener('click', async () => {
    await Tone.start();
    synth.triggerAttackRelease('E3', '8n');
});

// 

// Drums