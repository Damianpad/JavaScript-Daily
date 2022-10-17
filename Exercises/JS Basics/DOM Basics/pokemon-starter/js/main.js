const bulbasaur = document.querySelector('#bulbasaur')
const charmander = document.querySelector('#charmander')
const squirtle = document.querySelector('#squirtle')
const choice = document.querySelector('#youChose')


document.querySelector('#bulbasaur').addEventListener('click', bulba)
document.querySelector('#charmander').addEventListener('click', char)
document.querySelector('#squirtle').addEventListener('click', squirt)

function run () {
    bulbasaur.classList.toggle('hidden')
    charmander.classList.toggle('hidden')
    squirtle.classList.toggle('hidden')
}

function bulba(){
    console.log("BULBA BULBA")
    document.querySelector('#youChose').innerText = "Bulbasaur"
    choice.classList.toggle('hidden')
    charmander.classList.toggle('hidden')
    squirtle.classList.toggle('hidden')
}

function char() {
    console.log('CHAR CHAR');
    document.querySelector('#youChose').innerText = "Charmander"
    choice.classList.toggle('hidden')
    bulbasaur.classList.toggle('hidden')
    squirtle.classList.toggle('hidden')
}

function squirt() {
    console.log('SQUIRTLE SQUIRTLE');
    document.querySelector('#youChose').innerText = "Squirtle"
    choice.classList.toggle('hidden')
    bulbasaur.classList.toggle('hidden')
    charmander.classList.toggle('hidden')
}

run();