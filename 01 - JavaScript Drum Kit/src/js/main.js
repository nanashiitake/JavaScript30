document.addEventListener('readystatechange', function(event) {
    if (document.readyState === "complete") {
        putMemes(memes);
    }
});

function putMemeItem(meme) {
  return `<div id="${meme.id}" class="soundkey">
            <div class="key">${meme.key}</div>
            <div class="description">${meme.quote}</div>
        </div>`;
}

function putMemes(memes) {
    let contentHTML = '';
    for (let i = 0; i < 9; i++){
        contentHTML += putMemeItem(memes[i]);
    }
    document.getElementById('mycontent').innerHTML = contentHTML;
}
