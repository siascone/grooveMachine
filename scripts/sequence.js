
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
    }),
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
    }),
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
    }),
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
    }),
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
    }), 
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
    }),
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
    }),
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
    }),
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
    }),
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
    }),
    new Tone.NoiseSynth(),
    new Tone.MembraneSynth()
]

const gain = new Tone.Gain(0.1)
gain.toMaster()

synths.forEach(synth => synth.connect(gain))

const check = document.body.querySelectorAll('input')
const play = document.body.querySelector('.play');
const pause = document.body.querySelector('.stop');
const rows = document.body.querySelectorAll('.row');
const tempo = document.body.querySelector('.tempo-slide');
const tempoDisplay = document.body.querySelector('.bpm-display');
const clear = document.body.querySelector('.clear');
const reset = document.body.querySelector('.reset');
const spans = document.body.querySelectorAll('span');
const notes = ['E5', 'D5', 'C5', 'B4', 'A4', 'G4', 'F#4', 'E4', 'B7', 'B7', 'E1', 'E1'];

let index = 0;

Tone.Transport.bpm.value = 200
Tone.Transport.scheduleRepeat(repeat, "8n")

tempo.addEventListener( "input", e => {
    // e.preventDefault();
    // e.stopPropagation();
    Tone.Transport.bpm.rampTo(e.target.value, 0.01);
    tempoDisplay.value = e.target.value
    
});

reset.addEventListener('click', e => {
    index = 0;
    // Tone.Transport.stop();
    spans.forEach(span => span.classList.remove('highlight'))
})


clear.addEventListener('click', e => {
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked === true) {
            check[i].checked = false
        }
    }
})

tempoDisplay.addEventListener('change', e => {
    Tone.Transport.bpm.rampTo(e.target.value, 0.1);
    tempo.value = e.target.value;
});


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
            input = row.querySelector(`label:nth-child(${step + 1})`);
            span = input.querySelector(`span`);
            checkbox = input.querySelector('input');
            if (checkbox.checked) {
                if (i <= 8 || i === 11) {
                    synth.triggerAttackRelease(note, '8n', time);
                } else {
                    synth.triggerAttackRelease('8n', time);
                }
            }
            span.classList.toggle('highlight')
    }
    index++;
}