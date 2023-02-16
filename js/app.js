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

maxMusic = 16
AllMusicIndex = Math.floor(Math.random() * maxMusic)

RMagain.addEventListener('click', function () {
    maxMusic = 16
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