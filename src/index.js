import elements from './modules/elements';
import start from './modules/start';

const options = document.getElementById('options')

const button = document.querySelectorAll('.button')

button.forEach( btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        options.remove()
        elements()
        start()
    })
})