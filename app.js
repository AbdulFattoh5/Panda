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
        menu.style.backgroundColor = 'rgb(19, 19, 19)'
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
]

const wrapper = document.querySelector('.wrapper'),
    musicImg = wrapper.querySelector('.img_area img'),
    musicName = wrapper.querySelector('.song_details .name'),
    musicArtist = wrapper.querySelector('.song_details .artist'),
    mainAudio = wrapper.querySelector('#main_audio'),
    playPausebtn = wrapper.querySelector('.play_pause'),
    prevBtn = wrapper.querySelector('#prev'),
    nextBtn = wrapper.querySelector('#next'),
    plpa = document.querySelector('.button'),
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

window.addEventListener('load', () => {
    loadMusic(musicIndex)  // calling function while window loaded
    playingNow()
})

function loadMusic(IndexNumb) {
    musicName.innerHTML = allMusic[IndexNumb - 1].name
    musicArtist.innerHTML = allMusic[IndexNumb - 1].artist
    musicImg.src = `img/${allMusic[IndexNumb - 1].img}.jpg`
    mainAudio.src = `songs/${allMusic[IndexNumb - 1].src}.mp3`
    lyricsDiv.innerHTML = allMusic[IndexNumb - 1].lyrics
    linkBtn.href = `${allMusic[IndexNumb - 1].link}`
    downloadBtn.href = `songs/${allMusic[IndexNumb - 1].src}.mp3`
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

// Volume
const volumeIcon = document.querySelector('#volume_i'),
    volumeBox = document.querySelector('.volume'),
    volume_show = document.querySelector('#rangeValue'),
    track = document.createElement('audio'),
    recent_volume = document.querySelector('#volume_slider');
volumeIcon.addEventListener('click', function () {
    volumeBox.classList.toggle('active')
    volumeIcon.classList.toggle('active')
})
function thisVolume(volume_value) {
    document.getElementById("rangeValue").innerHTML = volume_value;
    mainAudio.volume = volume_value / 100;
}
// Menu on player
const playerMenuBtn = document.querySelector('#Menu_player'),
    playerMenu = document.querySelector('.player_menu'),
    playerMenuCloseBtn = document.querySelector('#btn_close')

playerMenuBtn.addEventListener('click', function () {
    playerMenu.classList.add('active')
})
playerMenuCloseBtn.addEventListener('click', function () {
    playerMenu.classList.remove('active')
})