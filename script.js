var cache = {};
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
    canOverlay(true);
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
    canOverlay(false);
}
function canOverlay(flag=true) {
    if (flag) {
        document.getElementById("overlay").style.display = 'block';
    } else {
        document.getElementById("overlay").style.display = 'none';
    }

}
var sidebar = document.getElementById("side-nav");
var paycount = 0;
function openNav() {
    sidebar.style.width = "250px";
    canOverlay(true);
    if (paycount == 0) {
        audioElement.play();
        paycount++;
    }
}

function closeNav() {
    if (sidebar.style.width != 0) {
        document.getElementById("side-nav").style.width = "0";
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

