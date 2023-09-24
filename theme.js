function applyTheme(theme='sun') {
    css.style.setProperty('--theme-color', ' var(--' + theme + '-theme-color');
    css.style.setProperty('--theme-primary-color', ' var(--' + theme + '-theme-primary-color');
    css.style.setProperty('--theme-invert-color', ' var(--' + theme + '-theme-invert-color');
    css.style.setProperty('--theme-menu-color', ' var(--' + theme + '-theme-menu-color');
    css.style.setProperty('--theme-menu-font-color', ' var(--' + theme + '-theme-menu-font-color');
    css.style.setProperty('--theme-walpaper-color', ' var(--' + theme + '-theme-walpaper-color');
    localStorage.setItem("theme", theme);
}

if (localStorage.getItem("theme")) {
    applyTheme(localStorage.getItem("theme"));
} else {
    applyTheme("moon");
}
function setFont(size) {
    css.style.fontSize = size + 'rem';
    localStorage.setItem("font-size", size);
}
if (localStorage.getItem("font-size")) {
    setFont(localStorage.getItem("font-size"));
} else {
    setFont("0.6");
}

function continueRead(path=null) {
    if (path) {
        localStorage.setItem("adhayay", path);
        // window.location.href = path + ".html";
        document.location.replace(path + ".html");
    } else {
        if (localStorage.getItem("adhayay")) {
            continueRead(localStorage.getItem("adhayay"));
        } else {
            continueRead('adhayay1');
        }
    }
}

var audioElement = document.createElement('audio');
window.onload = function() {
    audioElement.setAttribute('src', 'audio.mp3');
}

window.addEventListener('load', function() {
    window.history.pushState({}, '')
})

window.addEventListener('popstate', function() {
    window.history.pushState({}, '')
})

function whatsappShare(element) {
    console.log(element);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var message = encodeURIComponent('જય શ્રી કૃષ્ણ | સીતારામ') + " - " + encodeURIComponent('https://bhaveshpp.github.io/gitaji');
        var whatsapp_url = "whatsapp://send?text=" + message;
        window.location.href = whatsapp_url;
    }
}