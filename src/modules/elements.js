const elements = (e) => {

    const container = document.getElementById('container')

    const game = document.createElement('div')

    game.classList.add('game')

    container.appendChild(game)

    const score = document.createElement('div')

    score.classList.add('score')

    game.appendChild(score)

    const s_title = document.createElement('h2')

    s_title.textContent = 'Puntos'

    score.appendChild(s_title)

    const s_panel = document.createElement('div')

    s_panel.classList.add('s-panel')

    score.appendChild(s_panel)

    const s_user = document.createElement('span')

    s_user.textContent = '0'

    s_user.classList.add('s-user', 'points')

    s_panel.appendChild(s_user)

    const s_computer = document.createElement('span')

    s_computer.textContent = '0'

    s_computer.classList.add('s-computer', 'points')

    s_panel.appendChild(s_computer)

    const options_g = document.createElement('div')

    options_g.classList.add('options-g')

    game.appendChild(options_g)

    const o_title = document.createElement('h3')

    o_title.textContent = 'Opciones'

    options_g.appendChild(o_title)

    const o_images = document.createElement('div')

    o_images.classList.add('o-images')

    options_g.appendChild(o_images)

    const first = document.createElement('div')

    first.classList.add('first-g', 'option-g')

    o_images.appendChild(first)

    const img_r = document.createElement('img')

    img_r.setAttribute('src', './assets/svg/icon-rock.svg')

    first.appendChild(img_r)

    const text_r = document.createElement('span')

    text_r.textContent = 'Piedra'

    text_r.classList.add('rock', 'o-text')

    o_images.appendChild(text_r)

    const second = document.createElement('div')

    second.classList.add('second-g', 'option-g')

    o_images.appendChild(second)

    const img_p = document.createElement('img')

    img_p.setAttribute('src', './assets/svg/icon-paper.svg')

    second.appendChild(img_p)

    const text_p = document.createElement('span')

    text_p.textContent = 'Papel'

    text_p.classList.add('paper', 'o-text')

    o_images.appendChild(text_p)

    const third = document.createElement('div')

    third.classList.add('third-g', 'option-g')

    o_images.appendChild(third)

    const img_s = document.createElement('img')

    img_s.setAttribute('src', './assets/svg/icon-scissors.svg')

    third.appendChild(img_s)

    const text_s = document.createElement('span')

    text_s.textContent = 'Tijera'

    text_s.classList.add('scissor', 'o-text')

    o_images.appendChild(text_s)
}

export default elements