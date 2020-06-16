import elements from './modules/elements';

const options = document.getElementById('options')

const button = document.querySelectorAll('.button')

button.forEach( btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        options.remove()
        elements()
    })
})