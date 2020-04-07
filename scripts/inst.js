const instBtn = document.querySelector('.inst-btn')
const instList = document.querySelector('.inst-list')

instBtn.addEventListener('click', e => {
    let inst = document.querySelector('.inst-list')
    
    if (!inst.classList.contains('display')) {
        inst.classList.add('display')
    } else {
        inst.classList.remove('display')
    }

})

// instList.addEventListener('click', e => {
//     if (instList.classList.contains('display')) {
//         instList.classList.remove('display');
//     }
// })


// const grid = document.querySelector('.grid')
// const playback = document.querySelector('.playback')

// grid.addEventListener('click', e => {
//     if (instList.classList.contains('display')) {
//         instList.classList.remove('display');
//     }
// })

// playback.addEventListener('click', e => {
//     if (instList.classList.contains('display')) {
//         instList.classList.remove('display');
//     }
// })