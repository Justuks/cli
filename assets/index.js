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
                if (input.value ===correctAnswers[i]) {
                        alert('good')
                } else {
                        document.getElementById('header-text').innerHTML = 'Please, try again.'
                }
                i++
        }
})