function applyTheme(theme='sun') {
    css.style.setProperty('--theme-color', ' var(--' + theme + '-theme-color');
    css.style.setProperty('--theme-primary-color', ' var(--' + theme + '-theme-primary-color');
    css.style.setProperty('--theme-invert-color', ' var(--' + theme + '-theme-invert-color');
    css.style.setProperty('--theme-menu-color', ' var(--' + theme + '-theme-menu-color');
    css.style.setProperty('--theme-menu-font-color', ' var(--' + theme + '-theme-menu-font-color');
    css.style.setProperty('--theme-walpaper-color', ' var(--' + theme + '-theme-walpaper-color');
    localStorage.setItem("theme", theme);
}
if (localStorage.getItem("theme") && localStorage.getItem("theme") != "system") {
        applyTheme(localStorage.getItem("theme"));
} else {
    applySystemTheme();
}
function applySystemTheme() {
    let systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (systemTheme.matches) {
        applyTheme("moon");
    } else {
        applyTheme("sun");
    }
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

function continueRead(path=null,save=1) {
    if (path) {
        if(save) {
            localStorage.setItem("adhayay", path);
        }
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
var linebreak = '%0a';
function getContentTobeShare(element, urlEncoded = false) {
    var content = '';
    element.querySelectorAll('.shlok .part').forEach(part => {
        if (part != undefined) { 
        content += urlEncoded?encodeURIComponent(part.innerText):part.innerText;
        content += linebreak;
        }
    });
    content += linebreak;
    element.querySelectorAll('.anuvad p').forEach(part => {
        if (part != undefined) { 
            content += urlEncoded?encodeURIComponent(part.innerText):part.innerText;
            content += linebreak;
        }
    });
    return content;
}

function whatsappShare(element) {
    copyToClipboard(element);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var content = getContentTobeShare(element, true);
        var message = content + linebreak + linebreak + encodeURIComponent('https://bhaveshpp.github.io/gitaji');
        var whatsapp_url = "whatsapp://send?text=" + message;
        window.location.href = whatsapp_url;
    }
}

function reportIssue() {
    window.location.href = "https://github.com/bhaveshpp/gitaji/issues/new?title=%E0%AA%B9%E0%AA%B0%E0%AB%87%20%E0%AA%95%E0%AB%83%E0%AA%B7%E0%AB%8D%E0%AA%A3!";
}

function copyToClipboard(element) {
    if (window.isSecureContext && navigator.clipboard) {
        var content = getContentTobeShare(element);
        navigator.clipboard.writeText(content);
    }
}
function changeTheme(element) {
    if (element.checked) {
        applyTheme('sun');
    } else {
        applyTheme('moon');
    }
}
