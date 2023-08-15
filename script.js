var css = document.querySelector(':root');

let deferredPrompt;

window.addEventListener('beforeinstallprompt', event=>{
    // Prevent the default browser prompt
    event.preventDefault();

    // Store the event for later use
    deferredPrompt = event;

    // Show your custom add-to-home-screen popup
    showAddToHomeScreenPopup();
}
);

function showAddToHomeScreenPopup() {
    // Show your custom popup or banner here
    // You can create an HTML element and style it as desired

    const popup = document.getElementById('add-to-home-screen-popup');
    popup.style.display = 'block';

    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', addToHomeScreen);

    const cancelButton = document.getElementById('cancel-button');
    cancelButton.addEventListener('click', cancelAddToHomeScreen);
}

function addToHomeScreen() {
    // Show the browser's install prompt
    deferredPrompt.prompt();

    // Wait for the user's response
    deferredPrompt.userChoice.then(choiceResult=>{
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }

        // Reset the deferredPrompt variable
        deferredPrompt = null;

        // Hide the custom popup or banner
        hideAddToHomeScreenPopup();
    }
    );
}
function cancelAddToHomeScreen() {
    // Reset the deferredPrompt variable
    deferredPrompt = null;

    // Hide the custom popup or banner
    hideAddToHomeScreenPopup();
}
function hideAddToHomeScreenPopup() {
    const popup = document.getElementById('add-to-home-screen-popup');
    popup.style.display = 'none';
}
function canOverlay(flag=true) {
    if (flag) {
        document.getElementById("overlay").style.display = 'block';
    } else {
        document.getElementById("overlay").style.display = 'none';
    }

}
var sidebar = document.getElementById("mySidenav");
function openNav() {
    sidebar.style.width = "250px";
    canOverlay(true);
}

function closeNav() {
    if (sidebar.style.width != 0) {
        document.getElementById("mySidenav").style.width = "0";
        canOverlay(false);
    }
}

function shareApp() {
    if (navigator.share) {
        navigator.share({
            title: 'શ્રી ગીતાજી',
            text: 'Guidance for life journey!',
            url: 'https://bhaveshpp.github.io/gitaji/',
        }).then(()=>console.log('Successful share')).catch((error)=>console.log('Error sharing', error));
    } else {
        console.log('Share not supported on this browser, do it the old way.');
    }
}

function setFont(size) {
    css.style.fontSize = size + 'rem';
}

function changeTheme(element) {
    if(element.checked) {
        sunRiseTheme();
    }
    else 
    {
        sunsetTheme();
    }
}

function sunRiseTheme() {
    css.style.setProperty('--theme-color', '#fff');
    css.style.setProperty('--theme-color-second', '#303841');
    css.style.setProperty('--theme-invert-color', '#000');
    css.style.setProperty('--theme-menu-color', '#ab8446');
    css.style.setProperty('--theme-bg-color', '#c39b6b');
    css.style.setProperty('--theme-overlay-bg', 'rgba(0,0,0,0.5)');
}
function sunsetTheme() {
    css.style.setProperty('--theme-color', '#303841');
    css.style.setProperty('--theme-color-second', '#fff');
    css.style.setProperty('--theme-bg-color', '#000');
    css.style.setProperty('--theme-invert-color', '#c39b6b');
    css.style.setProperty('--theme-menu-color', '#ab8446');
    css.style.setProperty('--theme-overlay-bg', 'rgba(1,1,1,0.5)');
}