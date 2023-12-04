function changeBackgroundColor() { // JS koodi kirjutamisel kasutasime ChatGPT abi
    var body = document.body;
    var scrollPosition = window.scrollY;

    var intensity = Math.min(255, Math.round(scrollPosition / 2));

    var backgroundColor = 'rgb(' + intensity + ', ' + intensity + ', 0)';

    if (scrollPosition >= 255) {
        backgroundColor = '#f1c40f';
    }

    body.style.backgroundColor = backgroundColor;
}

function goToWebsite(url) {
    window.location.href = url;
}