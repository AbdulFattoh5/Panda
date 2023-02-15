// Burger menu
const burger = document.querySelector('#burger'),
    header = document.querySelector('.header'),
    overlay = document.querySelector('.header_overlay')

burger.addEventListener('click', function () {
    header.classList.toggle('open')
})

overlay.addEventListener('click', function () {
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
    PGapp = document.querySelector('.PGapp'),
    burgerSpan1 = document.querySelector('.header_burger-span1'),
    burgerSpan2 = document.querySelector('.header_burger-span2'),
    burgerSpan3 = document.querySelector('.header_burger-span3'),
    Panda = document.querySelector('.Panda'),
    mainSection = document.querySelector('.main')


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
        PGapp.style.color = 'white'
    } else if (modeBtn.innerHTML == 'Dark mode') {
        modeBtn.innerHTML = 'Light mode'
        main_h.style.color = 'white'
        main_p.style.color = 'white'
        main_btn.style.color = 'white'
        main_social.style.color = 'white'
        app.style.color = 'white'
        apps.style.color = 'white'
        menu.style.backgroundColor = 'black'
        burgerSpan1.style.backgroundColor = 'white'
        burgerSpan2.style.backgroundColor = 'white'
        burgerSpan3.style.backgroundColor = 'white'
        PGapp.style.color = 'rgb(152, 152, 152)'
    }
}

modeBtn.addEventListener('click', function () {
    body.classList.toggle('light-mode')
    mode()
})

main_btn.addEventListener('click', function () {
    mainSection.style.display = 'none'
    Panda.style.display = 'block'
})

// loading
window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}

// Player
let allMusic = [
    {
        name: 'Coming Back For You',
        artist: 'Fireboy DML',
        img: 'music-1',
        src: 'music-1',
        link: 'https://youtu.be/qBMSYhzc0nM',
        lyrics: `Oou le le <br>
        Oou le le <br>
        Oou le le <br>
        Oou le le <br>
        Oou le le <br>
        Oou le <br>
        Oou le le <br>
        Oou le le <br>
        Oou le le <br>
        Oou oou <br>
        Le le oou le le <br>
        Oou le oou le <br>
        Well I pray that the universe <br>
        Gives you way more than you deserve <br>
        When the tears fall like shooting stars <br>
        Remember who you are <br>
        Just look up to the sky you'll see <br>
        Well I pray that the universe <br>
        Gives you way more than you deserve <br>
        When the tears fall like shooting stars <br>
        Remember who you are <br>
        Just look up to the sky you'll see <br>
        I'm coming back for you <br>
        Oou le le <br>
        Oou le le <br>
        Oou le le <br>
        I'm coming back for you <br>
        Oou le le <br>
        Oou le le <br>
        Oou le <br>
        I'm coming back for you <br>
        Oou le le <br>
        Oou le le <br>
        Oou le le <br>
        Oou, you are never alone <br>
        Ima see you some day <br>
        I know that Ima see you some day <br>
        And I could take you some place <br>
        I know that Ima take you some place <br>
        I no go ever leave you rara <br>
        I no go give you no wahala <br>
        Always be there for you <br>
        I'm coming back for you <br>
        Oou le le <br>
        Oou le le <br>
        Oou le le <br>
        I'm coming back for you <br>
        Oou le le <br>
        Oou le le <br>
        Oou le <br>
        I'm coming back for you <br>
        Oou le le <br>
        Oou le le <br>
        Oou le le <br>
        Oou, you are never alone <br>
        Oh, I'm coming back for you <br>
        Oou le le <br>
        Oou le le <br>
        Oou le le <br>
        I'm coming back for you <br>
        Oou le le <br>
        Oou le le <br>
        Oou le <br>
        I'm coming back for you <br>
        Oou le le <br>
        Oou le le <br>
        Oou le le <br>
        Oou, you are never alone <br>
        I'm coming back for you`
    },
    {
        name: 'Firtinadayim',
        artist: 'Mabel-Matiz',
        img: 'music-2',
        src: 'music-2',
        link: 'https://youtu.be/kLGvPVQ7Djs',
        lyrics: `Bitmez oyun, bitmez oyun kızarsam <br>
        Yerde kanım, şimdi ne fayda kazansa <br>
        Fırtınadayım, bir fırtınadayım <br>
        Gözümün gördüğü, göğsümün bildiği ile bir değil <br>
        Yalnız değil, yanlış değilsin utanma <br>
        Rüyan senin, al bir de bunu burdan yak <br>
        Fırtınadayım, bir fırtınadayım <br>
        Gözümün gördüğü, göğsümün bildiği ile bir değil <br>
        Vurma sen onları, gencecik oğlanları <br>
        Bunlar hep o ihtiyar dünyanın yalanları <br>
        Bak bana gör kendini, böyledir bu can dili <br>
        Öyle bir sev ki artık, korkular tükenmeli <br>
        Vurma sen onları, gencecik oğlanları <br>
        Bunlar hep o ihtiyar dünyanın yalanları <br>
        Bak bana gör kendini, böyledir bu can dili <br>
        Öyle bir sev ki artık, sorgular tükenmeli <br>
        Bu kan artık tükenmeli <br>
        Ayrılık tükenmeli <br>
        Bu savaş tükenmeli <br>
        En başa dönülmeli `
    },
    {
        name: 'По Льду',
        artist: 'Jah-Khalib',
        img: 'music-3',
        src: 'music-3',
        link: 'https://youtu.be/H6mvQ0_-QYk',
        lyrics: `Мне приснился сон граничащий с реальностью <br>
        Там утренней росой свет падал яркой радостью в наш дом <br>
        Я слышал смех детей, видел улыбку на лице твоём <br>
        Проснувшись в темноте, вновь оказался в хаосе <br>
        По льду за тобой иду, по тонкому льду <br>
        Ла-ла-ла-ла, ла-ла-ла <br>
        По льду за тобой иду, по тонкому льду <br>
        Ла-ла-ла-ла, ла-ла-ла <br>
        По льду за тобой иду, по тонкому льду <br>
        Ла-ла-ла-ла, ла-ла-ла <br>
        По льду за тобой иду, по тонкому льду <br>
        Ла-ла-ла-ла, ла-ла-ла <br>
        Продолжаю искать, говорю себе: <br>
        "Хватай каждый шанс" <br>
        Длинная дистанция и каждый раз <br>
        Твоя вера помогает рук не опускать (о) <br>
        Всё не гладко, не ровно <br>
        Но это только сейчас (да) <br>
        На нас сыпется соль, но ноги <br>
        Не желают делать длительных пауз <br>
        Я задавался так часто вопросом: <br>
        Как дальше роли сыграть? <br>
        Я отправляю сигналами в космос <br>
        Всю глубину наших тайн <br>
        По льду за тобой иду, по тонкому льду <br>
        Ла-ла-ла-ла, ла-ла-ла <br>
        По льду за тобой иду, по тонкому льду <br>
        Ла-ла-ла-ла, ла-ла-ла <br>
        По льду за тобой иду, по тонкому льду <br>
        Ла-ла-ла-ла, ла-ла-ла <br>
        По льду за тобой иду, по тонкому льду <br>
        Ла-ла-ла-ла, ла-ла-ла <br>
        Хо-о-о-о-о! <br>
        Хо-о-о-о-о <br>
        Далеко земля, далеко земля <br>
        Хо-о-о-о-о <br>
        Где ты и я, где ты и я <br>
        По льду, по льду <br>
        За тобой одним иду <br>
        По льду, по льду <br>
        За тобой одним иду <br>
        Хо-о-о-о-о <br>
        Далеко земля, далеко земля <br>
        Хо-о-о-о-о <br>
        Где ты и я, где ты и я`
    },
    {
        name: 'Pink + White',
        artist: 'Frank Ocean',
        img: 'music-4',
        src: 'music-4',
        link: 'https://youtu.be/uzS3WG6__G4',
        lyrics: `Yeah, yeah oh <br>
        Yeah, yeah yeah <br>
        That's the way everyday goes <br>
        Every time we've no control <br>
        If the sky is pink and white <br>
        If the ground is black and yellow <br>
        It's the same way you showed me <br>
        Nod my head, don't close my eyes <br>
        Halfway on a slow move <br>
        It's the same way you showed me <br>
        If you could fly then you'd feel south <br>
        Up north's getting cold soon <br>
        The way it is, we're on land <br>
        So I'm someone to hold true <br>
        Keep you cool when it's still alive <br>
        Won't let you down when it's all ruin <br>
        Just the same way you showed me, showed me <br>
        You showed me love <br>
        Glory from above <br>
        Regard my dear <br>
        It's all downhill from here <br>
        In the wake of a hurricane <br>
        Dark skin of a summer shade <br>
        Nosedive in the flood lines <br>
        Tall tower of milk crates <br>
        It's the same way you showed me <br>
        Cannonball off the porch side <br>
        Older kids trying off the roof <br>
        Just the same way you showed me (You showed) <br>
        If you could die and come back to life <br>
        Up for air from the swimming pool <br>
        You'd kneel down to the dry land <br>
        Kiss the Earth that birthed you <br>
        Gave you tools just to stay alive <br>
        And make it out when the sun is ruined <br>
        That's the same way you showed me, showed me <br>
        You showed me love <br>
        Glory from above <br>
        Regard my dear <br>
        It's all downhill from here <br>
        Remember life <br>
        Remember how it was <br>
        Climb trees, Michael Jackson, it all ends here <br>
        Say what up to Matthew, to Shoob <br>
        Say what up to Danny <br>
        Say what up to life immortality <br>
        Bending up my Nikes <br>
        Running out the melpomene, nicotine <br>
        Stealing granny cigs (Take it easy) <br>
        Gimme something sweet <br>
        Bitch, I might like immortality <br>
        This is life, life immortality`
    },
    {
        name: 'I Wanted To Leave',
        artist: ' SYML',
        img: 'music-5',
        src: 'music-5',
        link: 'https://youtu.be/jVoyuNsAcg8',
        lyrics: `No Lyrics`
    },
    {
        name: 'Qanay',
        artist: 'Ali Otenov',
        img: 'music-6',
        src: 'music-6',
        link: 'https://youtu.be/gOudJ190wYI',
        lyrics: `Менікісің енді сені <br>
        Ешкімгеде бергім келмиді <br>
        Қатырмашы болды миымды <br>
        Жоқ дегеніңе сенбим <br>
        Пух атып тастадың мені <br>
        Жүрегіме оғың дәл тиді <br>
        Дәрігерім сенсің енді <br>
        Құшақтағанның бәрін емдейді <br>
        Менікісің енді сені <br>
        Ешкімгеде бергім келмиді <br>
        Қатырмашы болды миымды <br>
        Жоқ дегеніңе сенбим <br>
        Пух атып тастадың мені <br>
        Жүрегіме оғың дәл тиді <br>
        Дәрігерім сенсің енді <br>
        Құшақтағанның бәрін емдейді <br>
        Ерекше мен үшін <br>
        Сен сондай сүйкімдісің <br>
        Ойыңды кім білсін <br>
        Сен кейде бір түрлісің <br>
        Ендеше не тұрсың <br>
        Жасыл шаш кекілдісің <br>
        Орамалды келінсің <br>
        Бірақ неге күлкілісің <br>
        Менікісің енді сені <br>
        Ешкімгеде бергім келмиді <br>
        Қатырмашы болды миымды <br>
        Жоқ дегеніңе сенбим <br>
        Пух атып тастадың мені <br>
        Жүрегіме оғың дәл тиді <br>
        Дәрігерім сенсің енді <br>
        Құшақтағанның бәрін емдейді <br>
        Lolly-lolly-lolly, lolly-lolly-lolly <br>
        Lolly-lolly-lolly, lolly-lolly-lolly <br>
        Lolly-lolly-lolly, lolly-lolly-lolly <br>
        Lolly-lolly-lolly, lolly-lolly-lolly <br>
        Аспаннан <br>
        Салбырап сен түстің бе <br>
        Татай көйлек үстіңде <br>
        Жасқанба <br>
        Билейікши былайтып <br>
        (Осы әнде әнді бірге айтып) <br>
        Менікісің енді сені <br>
        Ешкімгеде бергім келмиді <br>
        Қатырмашы болды миымды <br>
        Жоқ дегеніңе сенбим <br>
        Пух атып тастадың мені <br>
        Жүрегіме оғың дәл тиді <br>
        Дәрігерім сенсің енді <br>
        Құшақтағанның бәрін емдейд <br>
        Lolly-lolly-lolly, lolly-lolly-lolly <br>
        Lolly-lolly-lolly, lolly-lolly-lolly <br>
        Lolly-lolly-lolly, lolly-lolly-lolly <br>
        Lolly-lolly-lolly, lolly-lolly-lolly`
    },
    {
        name: 'Доча',
        artist: 'Jah Khalib',
        img: 'music-7',
        src: 'music-7',
        link: 'https://youtu.be/ME-29s54CE0',
        lyrics: `Что ты видишь в своих снах? <br>
        Там, наверное, весна <br>
        И плывут облака? <br>
        В твоих миленьких глазах <br>
        И, надеюсь, в твоих снах <br>
        Где-то рядом есть я <br>
        И я одна из причин, по которой ты улыбаешься <br>
        Как это прекрасно – быть отцом <br>
        Как это прекрасно – быть отцом <br>
        Стою на земле, но невесом <br>
        Я думаю, готов отдать тебе всё целиком <br>
        Когда я смотрю на твоё лицо <br>
        Я пою: "О, Боже, да" <br>
        Как ты на меня похожа, да <br>
        Я счастлив, когда ты тоже, да <br>
        Ведь это чувство до дрожи <br>
        Что ты видишь в своих снах? <br>
        Там, наверное, весна <br>
        И плывут облака? <br>
        В твоих миленьких глазах <br>
        И, надеюсь, в твоих снах <br>
        Где-то рядом есть я <br>
        И я одна из причин, по которой ты улыбаешься <br>
        Как это прекрасно – быть отцом, особенно твоим <br>
        Я видел всю планету, но в тебе есть целый мир <br>
        Ты ещё не умеешь, но мы часто говорим <br>
        С тобою нахожу себя другим <br>
        И я спускаюсь со сцены, и смываю грим <br>
        Перед тобой без масок я верю, что любим <br>
        Перед тобой я тот, кто я есть, золото теряет вес <br>
        Когда мы лишь глазами говорим <br>
        Из грубого, типичного брутала, наглеца <br>
        Я превращаюсь в твоего миленького отца <br>
        И словно за мгновение пролетают месяца <br>
        В тебе я постоянно наблюдаю чудеса <br>
        И пою: "О, Боже, да" <br>
        Как ты на меня похожа, да <br>
        Я счастлив, когда ты тоже, да <br>
        Ведь чувство до дрожи <br>
        Что ты видишь в своих снах? <br>
        Там наверное весна <br>
        И плывут облака? <br>
        В твоих миленьких глазах <br>
        И, надеюсь, в твоих снах <br>
        Где-то рядом есть я <br>
        И я одна из причин, по которой ты улыбаешься <br>
        Что ты видишь в своих снах? <br>
        Там, наверное, весна <br>
        И плывут облака? <br>
        В твоих миленьких глазах <br>
        И, надеюсь, в твоих снах <br>
        Где-то рядом есть я <br>
        И я одна из причин, по которой ты улыбаешься`
    },
    {
        name: 'Лунная Ночь',
        artist: 'Emin feat JONY',
        img: 'music-8',
        src: 'music-8',
        link: 'https://youtu.be/G0J-VovoVvE',
        lyrics: `Я полюбил лишь тебя <br>
        Душу твою <br>
        Слёзы льются любя <br>
        Под лунную ночь для тебя пою <br>
        Счастливей нет меня <br>
        Когда ты рядом, милая <br>
        Я полюбил тебя <br>
        Теперь навеки ты моя <br>
        Никогда не знал любви такой <br>
        Говорят мне, что я сам не свой <br>
        Летней ночью я к тебе босой <br>
        Коснись меня и душу успокой <br>
        Я не понял как, но закружило нас <br>
        Тихо тает свет – бежим от лишних глаз <br>
        Пусть это будет навсегда <br>
        Пусть другие кто куда <br>
        Но ты моя, ты моя, ты моя <br>
        Я полюбил лишь тебя <br>
        Душу твою <br>
        Слёзы льются любя <br>
        Под лунную ночь для тебя пою <br>
        Счастливей нет меня <br>
        Когда ты рядом, милая <br>
        Я полюбил тебя <br>
        Теперь навеки ты моя <br>
        Никогда не знал любви такой <br>
        Греешь душу мне – я сам не свой <br>
        Тёплой ночью прикоснись рукой <br>
        Знаю, ты пришла мне подарить покой <br>
        Я не понял как, но закружило нас <br>
        Мы же знаем всё с тобой без лишних фраз <br>
        Пусть это будет навсегда <br>
        Пусть другие кто куда <br>
        Но ты моя, ты моя, ты моя <br>
        Я полюбил лишь тебя <br>
        Душу твою <br>
        Слёзы льются любя <br>
        Под лунную ночь для тебя пою <br>
        Счастливей нет меня <br>
        Когда ты рядом, милая <br>
        Я полюбил тебя <br>
        Теперь навеки ты моя <br>
        Ты моя <br>
        Ты моя`
    },
    {
        name: 'Con La Brisa',
        artist: 'Foudeqush & Ludwig Göransson',
        img: 'music-9',
        src: 'music-9',
        link: 'https://youtu.be/FSXcA0FPpbM',
        lyrics: `Yo daré mi vida entera <br>
        Por sacarte de las penumbras <br>
        Romperé con tu condena <br>
        En este mundo que se derrumba <br>
        Dame un poco más de tiempo <br>
        Que mi último aliento yo lo daré <br>
        Para mostrarte el cielo entero <br>
        En las nubes contigo me recostaré <br>
        Y nos colamos con la brisa <br>
        Y navegamos con el viento <br>
        Tenía la intensidad de tus ojos <br>
        Quema más que el fuego y se refleja en vidrios rotos <br>
        Prometo que un día abrirás los ojos <br>
        Y apreciarás los tonos más rojos que ofrеce el cielo <br>
        Entrе las sombras, mi amor <br>
        Tú eres el mayor destello <br>
        Qué bello, qué bello <br>
        Por eso es que, mi amor <br>
        Me recuerdas tanto a ello <br>
        Qué bello, qué bello <br>
        Nos colgamos con la brisa <br>
        Y navegamos con el viento <br>
        Y nos colgamos con la brisa <br>
        Y navegamos con el viento <br>
        Uh-uh-uh <br>
        Vamos tú y yo, vamos tú y yo <br>
        Uh-uh-uh <br>
        Vamos los dos, vamos los dos <br>
        Uh-uh-uh <br>
        Vamos tú y yo, vamos tú y yo <br>
        Uh-uh-uh <br>
        Vamos los dos, vamos los dos`
    },
    {
        name: 'Belki',
        artist: 'Mustafa Yavuz',
        img: 'music-10',
        src: 'music-10',
        link: 'https://youtu.be/7-_qRtGbCTE',
        lyrics: `Omzumda işlemediğim günahlar <br>
        Sözlerim de riya var <br>
        Kederim de bir aşk <br>
        Görüyor mu? <br>
        Belki de yanlıştı doğrularım <br>
        Aşkını, sevgini sorguladım <br>
        Yolların kapalıydı zorlamadım <br>
        Öldürdüm çiçeğimi, yaşatamadım <br>
        Duyamadım, gidişin sessizdi <br>
        Bilemem ki ben yarın <br>
        Sessizce döner misin? <br>
        Sanmam ki <br>
        Belki de yanlıştı doğrularım <br>
        Aşkını, sevgini sorguladım <br>
        Yolların kapalıydı zorlamadım <br>
        Öldürdüm çiçeğimi, yaşatamadım`
    },
    {
        name: 'Watermelon Sugar',
        artist: 'Harry Styles',
        img: 'music-11',
        src: 'music-11',
        link: 'https://youtu.be/nQA97xS49LQ',
        lyrics: `Tastes like strawberries <br>
        On a summer evenin' <br>
        And it sounds just like a song <br>
        I want more berries <br>
        And that summer feelin' <br>
        It's so wonderful and warm <br>
        Breathe me in <br>
        Breathe me out <br>
        I don't know if I could ever go without <br>
        I'm just thinking out loud <br>
        I don't know if I could ever go without <br>
        Watermelon sugar <br>
        High <br>
        Watermelon sugar <br>
        High <br>
        Watermelon sugar <br>
        High <br>
        Watermelon sugar high <br>
        Watermelon sugar <br>
        Strawberries <br>
        On a summer evenin' <br>
        Baby, you're the end of June <br>
        I want your belly <br>
        And that summer feelin' <br>
        Getting washed away in you <br>
        Breathe me in <br>
        Breathe me out <br>
        I don't know if I could ever go without <br>
        Watermelon sugar <br>
        High <br>
        Watermelon sugar <br>
        High <br>
        Watermelon sugar <br>
        High <br>
        Watermelon sugar high <br>
        Watermelon sugar <br>
        High <br>
        Watermelon sugar <br>
        High <br>
        Watermelon sugar <br>
        High <br>
        Watermelon sugar high <br>
        I just wanna taste it <br>
        I just wanna taste it <br>
        Watermelon sugar high <br>
        Tastes like strawberries <br>
        On a summer evenin' <br>
        And it sounds just like a song <br>
        I want your belly <br>
        And that summer feelin' <br>
        I don't know if I could ever go without <br>
        Watermelon sugar <br>
        High <br>
        Watermelon sugar <br>
        High <br>
        Watermelon sugar (sugar) <br>
        High <br>
        Watermelon sugar high (sugar) <br>
        Watermelon sugar <br>
        High <br>
        Watermelon sugar <br>
        High <br>
        Watermelon sugar <br>
        High <br>
        Watermelon sugar high <br>
        I just wanna taste it <br>
        I just wanna taste it <br>
        Watermelon sugar high <br>
        I just wanna taste it <br>
        I just wanna taste it <br>
        Watermelon sugar high <br>
        Watermelon sugar`
    },
    { 
        name: 'Eyes on you x Zara Zara',
        artist: ' SYML',
        img: 'music-12',
        src: 'music-12',
        link: 'https://youtu.be/xUxL6s5WLHY',
        lyrics: `hai zaraa-zaraa hai zaraa ab hua asar zaraa-zaraa <br>
        zyaada nahin bas thoda sa hua asar naya zaraa <br>
        hai zaraa-zaraa naya zaraa ab hua asar zaraa-zaraa <br>
        bin bataae vo raat mein zindagi kee poshaakh mein <br>
        milne aaen the muje kuch savaal kuch savaal <br>
        aise ulje unki jaal mein sanbhale-sanbhale hum fisal gae <br>
        baathon-baathon mein hee hue hum behaal hae behaal <br>
        hai zaraa-zaraa hai zaraa ab hua asar zaraa-zaraa <br>
        zyaada nahin bas thoda sa hua asar naya zaraa <br>
        hai zaraa-zaraa naya zaraa ab hua asar zaraa-zaraa <br>
        bahake-bahake gumraah se dhundte the apanee raah ke <br>
        khoe-khoe hum khud se hee mil liye mil liye <br>
        ab mera hai jo hausla ud ke chhoona hai aasamaan <br>
        sarhadon ke paar hee ab hum milee vahaan milee <br>
        hai zaraa-zaraa hai zaraa ab hua asar zaraa-zaraa <br>
        zyaada nahin bas thoda sa hua asar naya zaraa <br>
        hai zaraa-zaraa naya zaraa ab hua asar zaraa-zaraa <br>
        hai naya zaraa-zaraa zaraa-zaraa naya zaraa`
    },
]

const wrapper = document.querySelector('.wrapper'),
    musicImg = wrapper.querySelector('.img_area img'),
    musicName = wrapper.querySelector('.song_details .name'),
    musicArtist = wrapper.querySelector('.song_details .artist'),
    mainAudio = wrapper.querySelector('#main_audio'),
    playPausebtn = wrapper.querySelector('.play_pause'),
    prevBtn = wrapper.querySelector('#prev'),
    nextBtn = wrapper.querySelector('#next'),
    plpa = document.querySelector('.btn'),
    progressArea = wrapper.querySelector('.progress_area'),
    progressBar = wrapper.querySelector('.progress_bar'),
    musicList = wrapper.querySelector('.music_list'),
    showMoreBtn = wrapper.querySelector('#more-music'),
    hideMusicBtn = musicList.querySelector('#close'),
    lyricsBtn = document.querySelector('#lyrics'),
    lyrics = document.querySelector('.lyrics'),
    lyricsDiv = document.querySelector('.lyrics_div'),
    lyricsCloseBtn = document.querySelector('#close_btn'),
    linkBtn = document.getElementById('link'),
    downloadBtn = document.getElementById('download')


let musicIndex = 1

// calling functions while loading
window.addEventListener('load', () => {
    loadMusic(musicIndex)
    RMusic(AllMusicIndex)  
    playingNow()
})

function loadMusic() {
    musicName.innerHTML = allMusic[musicIndex - 1].name
    musicArtist.innerHTML = allMusic[musicIndex - 1].artist
    musicImg.src = `img/${allMusic[musicIndex - 1].img}.jpg`
    mainAudio.src = `songs/${allMusic[musicIndex - 1].src}.mp3`
    lyricsDiv.innerHTML = allMusic[musicIndex - 1].lyrics
    linkBtn.href = `${allMusic[musicIndex - 1].link}`
    downloadBtn.href = `songs/${allMusic[musicIndex - 1].src}.mp3`
}

// Music Play function
function playMusic() {
    wrapper.classList.add('paused')
    plpa.classList.add('fa-pause')
    plpa.classList.remove('fa-play')
    mainAudio.play()
}

// Music Pause function
function pauseMusic() {
    wrapper.classList.remove('paused')
    plpa.classList.remove('fa-pause')
    plpa.classList.add('fa-play')
    mainAudio.pause()
}

// Next music function
function nextMusic() {
    musicIndex++
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex)
    playMusic()
    playingNow()
}

// Previous music function
function prevMusic() {
    musicIndex--
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex)
    playMusic()
    playingNow()
}

// Play or Pause music
playPausebtn.addEventListener('click', function () {
    const isMusicPause = wrapper.classList.contains('paused')
    isMusicPause ? pauseMusic() : playMusic();
})

// Next music
nextBtn.addEventListener('click', function () {
    nextMusic()
    playingNow()
})

// Previous music
prevBtn.addEventListener('click', function () {
    prevMusic()
    playingNow()
})

// Progressbar updateing
mainAudio.addEventListener('timeupdate', function (el) {
    const currentTime = el.target.currentTime // current time of music
    const duration = el.target.duration // total duration time of music
    let progressWidth = (currentTime / duration) * 100
    progressBar.style.width = `${progressWidth}%`

    let musicCurrentTime = wrapper.querySelector('.current'),
        musicDuration = wrapper.querySelector('.duration')

    mainAudio.addEventListener('loadeddata', function () {
        // update total duration
        let audioDuration = mainAudio.duration,
            totalMin = Math.floor(audioDuration / 60)
        totalSec = Math.floor(audioDuration % 60)
        if (totalSec < 10) { // 0 if sec is less than 10
            totalSec = `0${totalSec}`
        }
        musicDuration.innerHTML = `${totalMin}:${totalSec}`
    })
    // update current time
    let currentMin = Math.floor(currentTime / 60),
        currentSec = Math.floor(currentTime % 60)
    if (currentSec < 10) { // 0 if sec is less than 10
        currentSec = `0${currentSec}`
    }
    musicCurrentTime.innerHTML = `${currentMin}:${currentSec}`
})

// updateing current time with click on progress area
progressArea.addEventListener('click', function (el) {
    let progressWidth = progressArea.clientWidth, // width of progress bar
        clickedOffsetX = el.offsetX, // offset X value
        songduration = mainAudio.duration // music total duration
    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songduration
    playMusic()
})

// if music is ended playing next music
mainAudio.addEventListener('ended', function () {
    nextMusic()
    playingNow()
})

// All musics 
showMoreBtn.addEventListener('click', function () {
    musicList.classList.toggle('active')
})

// Hide all musics
hideMusicBtn.addEventListener('click', function () {
    showMoreBtn.click()
})

const ulTag = musicList.querySelector('ul')
for (let i = 0; i < allMusic.length; i++) {
    let liTag = `<li li-index="${i + 1}" >
                    <div class="row">
                        <span>${allMusic[i].name}</span>
                        <p>${allMusic[i].artist}</p>
                    </div>
                    <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
                    <span id="${allMusic[i].src}" class="audio_duration">3:40</span>
                </li>
    `
    ulTag.insertAdjacentHTML('beforeend', liTag)

    let liAudioDuration = ulTag.querySelector(`#${allMusic[i].src}`),
        liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`)

    liAudioTag.addEventListener('loadeddata', function () {
        let audioDuration = liAudioTag.duration,
            totalMin = Math.floor(audioDuration / 60),
            totalSec = Math.floor(audioDuration % 60)
        if (totalSec < 10) { // 0 if sec is less than 10
            totalSec = `0${totalSec}`
        }
        liAudioDuration.innerHTML = `${totalMin}:${totalSec}`
        liAudioDuration.setAttribute('t-duration', `${totalMin}:${totalSec}`)
    })
}

// add atribute onclick to li
const allLiTags = ulTag.querySelectorAll('li')
function playingNow() {
    for (let l = 0; l < allLiTags.length; l++) {
        let audioTag = allLiTags[l].querySelector('.audio_duration')
        if (allLiTags[l].classList.contains('playing')) {
            allLiTags[l].classList.remove('playing')
            let aDuration = audioTag.getAttribute('t-duration')
            audioTag.innerHTML = aDuration
        }
        if (allLiTags[l].getAttribute('li-index') == musicIndex) {
            allLiTags[l].classList.add('playing')
            audioTag.innerHTML = 'Playing'
        }
        allLiTags[l].setAttribute('onclick', 'clicked(this)')
    }
}

// Play songs from library
function clicked(el) {
    let getLiIndex = el.getAttribute('li-index')
    musicIndex = getLiIndex
    loadMusic(musicIndex)
    playMusic()
    playingNow()
}

// Lyrics
lyricsBtn.addEventListener('click', function () {
    lyrics.classList.add('active')
})
lyricsCloseBtn.addEventListener('click', function () {
    lyrics.classList.remove('active')
})

// // Volume
// const volumeIcon = document.querySelector('#volume_i'),
//     volumeBox = document.querySelector('.volume'),
//     volume_show = document.querySelector('#rangeValue'),
//     track = document.createElement('audio'),
//     recent_volume = document.querySelector('#volume_slider');
// volumeIcon.addEventListener('click', function () {
//     volumeBox.classList.toggle('active')
//     volumeIcon.classList.toggle('active')
// })
// function thisVolume(volume_value) {
//     document.getElementById("rangeValue").innerHTML = volume_value;
//     mainAudio.volume = volume_value / 100;
// }
// Menu on player
const playerMenuBtn = document.querySelector('#Menu_player'),
    playerMenu = document.querySelector('.player_menu'),
    playerMenuCloseBtn = document.querySelector('#btn_close'),
    PlayerMenuOverlay = document.querySelector('.menu_player_overlay')

playerMenuBtn.addEventListener('click', function () {
    playerMenu.classList.add('active')
})
playerMenuCloseBtn.addEventListener('click', function () {
    playerMenu.classList.remove('active')
})
// Random music
const randomMusicBtn = document.querySelector('#randomMusicBtn'),
    randomMusic = document.querySelector('.randomMusic'),
    randomMusicClose = document.querySelector('#randomMusicClose'),
    randmoMusicGenerateBtn = document.querySelector('.randmoMusicGenerateBtn'),
    randomMusicName = document.querySelector('.randomMusic_name'),
    RMusicImg = document.querySelector('.img_area_RM'),
    RMname = document.querySelector('.RMname'),
    RMartist = document.querySelector('.RMartist'),
    RMaudio = document.querySelector('#RM_audio'),
    RMplaypause = document.querySelector('.RMplay_pause'),
    RMagain = document.querySelector('.RMagain'),
    RMplpa = document.querySelector('.button'),
    RMusicPlay = document.querySelector('.randmoMusic_play'),
    RMprogress_area = document.querySelector('.RMprogress_area'),
    RMprogress_bar = document.querySelector('.RMprogress_bar'),
    RMclose = document.querySelector('#RMclose'),
    RMoverlay = document.querySelector('.randmoMusic_play_overlay')

randomMusicBtn.addEventListener('click', function () {
    playerMenu.classList.remove('active')
    randomMusic.classList.add('active')
})
randomMusicClose.addEventListener('click', function () {
    randomMusic.classList.remove('active')
    RMpauseMusic()
})

maxMusic = 12
AllMusicIndex = Math.floor(Math.random() * maxMusic)

RMagain.addEventListener('click', function () {
    maxMusic = 12
    AllMusicIndex = Math.floor(Math.random() * maxMusic)
    RMusic()
    RMpauseMusic()
})   

function RMusic() {
    RMname.innerHTML = allMusic[AllMusicIndex - 1].name
    RMartist.innerHTML = allMusic[AllMusicIndex - 1].artist
    RMusicImg.src = `img/${allMusic[AllMusicIndex - 1].img}.jpg`
    RMaudio.src = `songs/${allMusic[AllMusicIndex - 1].src}.mp3`
}

function RMplayMusic() {
    RMusicPlay.classList.add('paused')
    RMplpa.classList.add('fa-pause')
    RMplpa.classList.remove('fa-play')
    RMaudio.play()
}

function RMpauseMusic() {
    RMusicPlay.classList.remove('paused')
    RMplpa.classList.remove('fa-pause')
    RMplpa.classList.add('fa-play')
    RMaudio.pause()
}

RMplaypause.addEventListener('click', function () {
    const isMusicPause = RMusicPlay.classList.contains('paused')
    isMusicPause ? RMpauseMusic() : RMplayMusic();
})

RMaudio.addEventListener('timeupdate', function (el) {
    const currentTime = el.target.currentTime // current time of music
    const duration = el.target.duration // total duration time of music
    let progressWidth = (currentTime / duration) * 100
    RMprogress_bar.style.width = `${progressWidth}%`

    let musicCurrentTime = RMusicPlay.querySelector('.RMcurrent'),
        musicDuration = RMusicPlay.querySelector('.RMduration')

    RMaudio.addEventListener('loadeddata', function () {
        // update total duration
        let audioDuration = RMaudio.duration,
            totalMin = Math.floor(audioDuration / 60)
        totalSec = Math.floor(audioDuration % 60)
        if (totalSec < 10) { // 0 if sec is less than 10
            totalSec = `0${totalSec}`
        }
        musicDuration.innerHTML = `${totalMin}:${totalSec}`
    })
    // update current time
    let currentMin = Math.floor(currentTime / 60),
        currentSec = Math.floor(currentTime % 60)
    if (currentSec < 10) { // 0 if sec is less than 10
        currentSec = `0${currentSec}`
    }
    musicCurrentTime.innerHTML = `${currentMin}:${currentSec}`
})

RMprogress_area.addEventListener('click', function (el) {
    let progressWidth = RMprogress_area.clientWidth, // width of progress bar
        clickedOffsetX = el.offsetX, // offset X value
        songduration = RMaudio.duration // music total duration
    RMaudio.currentTime = (clickedOffsetX / progressWidth) * songduration
    RMplayMusic()
})

randmoMusicGenerateBtn.addEventListener('click', function () {
    RMoverlay.classList.add('active')
    RMusicPlay.classList.add('active')
    pauseMusic()
})

RMclose.addEventListener('click', function () {
    RMoverlay.classList.remove('active')
    RMusicPlay.classList.remove('active')
})

RMoverlay.addEventListener('click', function () {
    RMoverlay.classList.remove('active')
    RMusicPlay.classList.remove('active')
})