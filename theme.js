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

function continueRead(adhyay = null) {
    if (adhyay) {
        localStorage.setItem("adhayay", adhyay);
        window.location.href = "adhayay.html#" + adhyay;
    } else {
        if (localStorage.getItem("adhayay")) {
            continueRead(localStorage.getItem("adhayay"));
        } else {
            continueRead('#adhayay1');
        }
    }
}

addEventListener('load', ()=>{    
    let adhyay = document.getElementById(location.hash.replace('#',''));
    if (adhyay) {
         adhyay.style.display='block';   
    }
}
);
var audioElement = document.createElement('audio');
window.onload=function(){
    audioElement.setAttribute('src', 'audio.mp3');
}