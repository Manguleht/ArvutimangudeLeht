// Funktsioon, mis muudab taustavärvi vastavalt lehekülje kerimisele

function changeBackgroundColor() { // JS koodi kirjutamisel kasutasime ChatGPT (chat.openai.com) abi
    // Hangime keha elemendi
    var body = document.body;
    
    // Hangime lehekülje kerimise asukoha
    var scrollPosition = window.scrollY;

    // Arvutame intensiivsuse, piirates selle maksimumväärtusega 255
    var intensity = Math.min(255, Math.round(scrollPosition / 2));
    
    // Loome taustavärvi vastavalt intensiivsusele
    var backgroundColor = 'rgb(' + intensity + ', ' + intensity + ', 0)';

    // Kui kerimise asukoht ületab 255, määrame kindla taustavärvi
    if (scrollPosition >= 255) {
        backgroundColor = '#f1c40f'; // kollane toon
    }

    // Määrame keha elemendi taustavärvi
    body.style.backgroundColor = backgroundColor;
}

// Funktsioon, mis suunab kasutaja antud veebiaadressile
function goToWebsite(url) {
    window.location.href = url;
}