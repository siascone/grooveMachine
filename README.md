# Welcome to Groove Machine

Groove Machine is a 32 step sequencer with an 8 track, aeolian mode, tone selection grid and a 4 track Drum Machine with which users can create and manipulate original and groovy loops.

[Check it out here!](https://siascone.github.io/grooveMachine/)

![web-view](assets/grooveMachine.png)

## Technologies Used

Groove Machine was constructed utilizing a combination of JavaScript, Tone.js, HTML and CSS. JavaScript was used for the main logic along with Tone.js to generate the various sound samples. HTML was used to structure the application and CSS was used for styling.

## Features

### Tone and Rhythm Selection

Users can easily select a unique arrangement of sounds from 8 tones and 4 rhythms mapped across a 384 button grid. Each row corresponds with a single sound that is generated using a Tone.js synth. Utilizing Tone.js' synth method allows the application to generate the sound instantly upon each press of the button or step in the sequence during play back. This allows the appliction to be free of any stored tone library. The follwing code demonstrates how a tone is generated in the program.

#### Tone 1

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
     }).toMaster();
    
#### Rhythm 3

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
     }).toMaster();

The .toMaster() function is used to send the tone the main audio output.

### Step Sequence

### Playback and Reset

## Planned Future Features

* Volume controle.
* Scale key and drum selection.
* Loop recording, playback and sharing.


