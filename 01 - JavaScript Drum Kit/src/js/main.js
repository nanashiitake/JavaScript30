document.addEventListener('readystatechange', function (event) {
    if (document.readyState === "complete") {
        putMemes(memes);
        let keypad = document.getElementsByClassName('soundkey');
        Array.from(keypad).forEach(element => {
            element.addEventListener('click', keyFinder, false);
        });
    }
});

function keyFinder (e) {
    console.log(e.target.closest('.soundkey').id);
    playSound(e.target.closest('.soundkey').id);
    e.stopPropagation();
}

function playSound(id) {
   let myMeme = memes.find(element => element.id == id);
   let myAudio= new Audio(`./src/audios/${myMeme.sound}`);
   myAudio.play();
    console.log(myMeme.sound);
}

function putMemeItem(meme) {
    return `<div id="${meme.id}" class="soundkey">
            <div class="key">${meme.key}</div>
            <div class="description">${meme.quote}</div>
        </div>`;
}

function putMemes(memes) {
    let contentHTML = '';
    for (let i = 0; i < 9; i++) {
        contentHTML += putMemeItem(memes[i]);
    }
    document.getElementById('mycontent').innerHTML = contentHTML;
}

