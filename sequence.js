
const synths = [
    new Tone.Synth({
        oscillator: {
            type: 'sine'
        },
        envelope: {
            attack: 0.01,
            decay: 0.2,
            sustain: 0.4,
            release: 0.5
        }
    }).toMaster(),
    new Tone.Synth({
        oscillator: {
            type: 'sine'
        },
        envelope: {
            attack: 0.01,
            decay: 0.2,
            sustain: 0.4,
            release: 0.5
        }
    }).toMaster(), 
    new Tone.Synth({
        oscillator: {
            type: 'sine'
        },
        envelope: {
            attack: 0.01,
            decay: 0.2,
            sustain: 0.4,
            release: 0.5
        }
    }).toMaster(),
    new Tone.Synth({
        oscillator: {
            type: 'sine'
        },
        envelope: {
            attack: 0.01,
            decay: 0.2,
            sustain: 0.4,
            release: 0.5
        }
    }).toMaster(),
    new Tone.Synth({
        oscillator: {
            type: 'sine'
        },
        envelope: {
            attack: 0.01,
            decay: 0.2,
            sustain: 0.4,
            release: 0.5
        }
    }).toMaster(),
    new Tone.Synth({
        oscillator: {
            type: 'sine',
        },
        envelope: {
            attack: 0,
            decay: 0.05,
            sustain: 0,
            release: 0.05
        }
    }).toMaster(),
    new Tone.MetalSynth({
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
    }).toMaster(),
    new Tone.NoiseSynth().toMaster(),
    new Tone.MembraneSynth().toMaster()
]
const play = document.body.querySelector('.play');
const pause = document.body.querySelector('.stop');
const rows = document.body.querySelectorAll('.row');
const notes = ['E3', 'F#3', 'G#3', 'B3', 'C#3', 'B7', 'B7', 'E1', 'E1'];

let index = 0;
Tone.Transport.scheduleRepeat(repeat, "8n")

play.addEventListener('click', async () => {
    Tone.Transport.start()
})

pause.addEventListener('click', async () => {
    Tone.Transport.stop()
})

function repeat(time) {
    let step = index % 32;
    for (let i = 0; i < rows.length; i++) {
        let synth = synths[i],
            note = notes[i],
            row = rows[i],
            input = row.querySelector(`input:nth-child(${step + 1})`);
            if (input.checked) synth.triggerAttackRelease(note, '8n', time);
    }
    index++;
}