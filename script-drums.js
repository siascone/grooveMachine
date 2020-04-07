const gainDrum = new Tone.Gain(0.1)
gainDrum.toMaster()

const noiseSynth = new Tone.NoiseSynth().connect(gainDrum);
const membrane = new Tone.MembraneSynth().connect(gainDrum);
const clickSynth = new Tone.Synth({
        oscillator: {
            type: 'sine',
        }, 
        envelope: {
            attack: 0,
            decay: 0.05,
            sustain: 0,
            release: 0.05
        }
}).connect(gainDrum);
const hatSynth = new Tone.MetalSynth({
    frequency: 161.82,
    envelope: {
        attack: 0.001,
        decay: 0.5,
        release: 0.1
    },
    harmonicity: 5.1,
    modulationIndex: 32,
    resonance: 40,
    octaves: 1.5
}).connect(gainDrum);

// Drums B7 8n 8n E1
const click = document.querySelectorAll('.drum-row1');
const hat = document.querySelectorAll('.drum-row2');
const snare = document.querySelectorAll('.drum-row3');
const bass = document.querySelectorAll('.drum-row4');

for (let i = 0; i < click.length; i++) {
    click[i].addEventListener('click', async () => {
        await Tone.start();
        clickSynth.triggerAttackRelease('b7', '8n').volume.value = -10
    })
}

for (let i = 0; i < hat.length; i++) {
    hat[i].addEventListener('click', async () => {
        await Tone.start();
        hatSynth.triggerAttackRelease('8n').volume.value = -15
    })
}
 
for (let i = 0; i < snare.length; i++) {
    snare[i].addEventListener('click', async () => {
        await Tone.start();
        noiseSynth.triggerAttackRelease('8n').volume.value = -2
    })
}

for (let i = 0; i < bass.length; i++) {
    bass[i].addEventListener('click', async () => {
        await Tone.start();
        membrane.triggerAttackRelease('E1', '8n').volume.value = -0
    })
}
