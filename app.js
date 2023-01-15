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
    apps = document.querySelector('.apps'),
    menu = document.querySelector('.menu'),
    soonLink = document.querySelector('.link_soon'),
    burgerSpan1 = document.querySelector('.header_burger-span1'),
    burgerSpan2 = document.querySelector('.header_burger-span2'),
    burgerSpan3 = document.querySelector('.header_burger-span3')


    function mode() {
        if (modeBtn.innerHTML == 'Light mode') {
            modeBtn.innerHTML = 'Dark mode'
            main_h.style.color = 'black'
            main_p.style.color = 'black'
            main_btn.style.color = 'black'
            main_social.style.color = 'black'
            app.style.color = 'black'
            apps.style.color = 'black'
            menu.style.backgroundColor = 'rgb(95, 95, 95)'
            burgerSpan1.style.backgroundColor = 'black'
            burgerSpan2.style.backgroundColor = 'black'
            burgerSpan3.style.backgroundColor = 'black'
            soonLink.style.color = 'white'
        } else if(modeBtn.innerHTML == 'Dark mode'){
            modeBtn.innerHTML = 'Light mode'
            main_h.style.color = 'white'
            main_p.style.color = 'white'
            main_btn.style.color = 'white'
            main_social.style.color = 'white'
            app.style.color = 'white'
            apps.style.color = 'white'
            menu.style.backgroundColor = 'rgb(19, 19, 19)'
            burgerSpan1.style.backgroundColor = 'white'
            burgerSpan2.style.backgroundColor = 'white'
            burgerSpan3.style.backgroundColor = 'white'
            soonLink.style.color = 'rgb(152, 152, 152)'
        }
    }

modeBtn.addEventListener('click', function () {
    body.classList.toggle('light-mode')
    mode()
})