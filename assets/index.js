//we will initialise some innerHTML changes once we push press word in a header paragraph
document.getElementById('press').onclick = function () {
        document.getElementById('header-text').innerHTML = 'Please, complete your test below in order to accsess range finder.';

        /* now in this function, there is also an intention to open test questionnaire 
        upon pressing the word 'here' on the initial header patragraph
        document. Currently questionnaire is hidden with the help of CSS*/
        document.getElementById('test').style.visibility = 'visible';
}

//work on questionnaire/make an array with correct answers
let correctAnswers = ['port', 360, 1.85, 'nautical mile'];
let button = document.querySelector('#check');
button.addEventListener('click', function () {
        let answers = document.querySelectorAll('#test input');
        let i = 0;
        for (let input of answers) {
                if (input.value === correctAnswers[i]) {
                        location.replace('range.html')
                } else {
                        document.getElementById('header-text').innerHTML = 'Please, try again.'
                }
                i++
        }
})

//script for range finder page below
let wind = 0
let display = document.getElementById('wind-display')
let fuel = 5
let windOnFuel = document.getElementById('fuel-gauge')

function up(){
    if(wind === 30)return false
   console.log(display.innerHTML = ++ wind)
   console.log(windOnFuel.innerHTML = fuel ++)
}
up()

function down(){
    if(wind < 1)return false
    console.log(display.innerHTML = --wind)
}
down()

let rpm = 500
let rpmDisplay = document.getElementById('rpm-display')

function high(){
    if(rpm === 2400)return false
    console.log(rpmDisplay.innerHTML  = rpm += 100)
}
high()


function low(){
    if(rpm === 600)return false
     console.log(rpmDisplay.innerHTML = rpm -= 100)
}
low()