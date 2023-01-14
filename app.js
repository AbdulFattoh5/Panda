// Burger menu
const burger = document.querySelector('#burger'),
    header = document.querySelector('.header')

burger.addEventListener('click', function () {
    header.classList.toggle('open')
})

//Dark-Light mode
const modeBtn = document.querySelector('.dark_mode'),
    body = document.body,
    main_h = document.querySelector('.main_h'),
    main_p = document.querySelector('.main_p'),
    main_btn = document.querySelector('.main_btn'),
    main_social = document.querySelector('.main_social'),
    app = document.querySelector('.app'),
    apps = document.querySelector('.apps')

    function mode() {
        if (modeBtn.innerHTML == 'Light mode') {
            modeBtn.innerHTML = 'Dark mode'
            main_h.style.color = 'black'
            main_p.style.color = 'black'
            main_btn.style.color = 'black'
            main_social.style.color = 'black'
            app.style.color = 'black'
            apps.style.color = 'black'
        } else if(modeBtn.innerHTML == 'Dark mode'){
            main_h.style.color = 'white'
            main_p.style.color = 'white'
            main_btn.style.color = 'white'
            main_social.style.color = 'white'
            app.style.color = 'white'
            apps.style.color = 'white'
            modeBtn.innerHTML = 'Light mode'
        }
    }

modeBtn.addEventListener('click', function () {
    body.classList.toggle('light-mode')
    mode()
})