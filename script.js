const synth = new Tone.Synth().toMaster();


document.querySelector('button').addEventListener('click', async () => {
    await Tone.start()
synth.triggerAttackRelease('C4', '8n')
    console.log('audio is ready')
})