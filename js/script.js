
const jungle = document.getElementById('jungle')
const paradise = document.getElementById('paradise')


function tocarMusica(el){

    const audio = document.getElementById('audio')
    let url = el.id


    if(url == 'jungle'){
        audio.src = '/assets/sounds/jungle.mp3'
    }
    else if(url == 'paradise'){
        audio.src = '/assets/sounds/paradise.mp3'
    }
    else if(url == 'cry'){
        audio.src = '/assets/sounds/cry.mp3'
    }
    else if(url == 'sweet'){
        audio.src = '/assets/sounds/sweet.mp3'
    }
    else if(url == 'patience'){
        audio.src = '/assets/sounds/patience.mp3'
    }
    else if(url == 'november'){
        audio.src = '/assets/sounds/november.mp3'
    }
    audio.play()
}


