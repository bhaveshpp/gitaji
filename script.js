const xhr = new XMLHttpRequest();
xhr.open('GET', 'db.json', true);

xhr.onload = function() {
  if (xhr.status === 200) {
    const jsonData = JSON.parse(xhr.responseText);
    // Access the data from the JSON file
    console.log(jsonData);
  } else {
    console.error('Error fetching JSON file:', xhr.status);
  }
};

xhr.onerror = function() {
  console.error('Error fetching JSON file');
};

xhr.send();

let deferredPrompt;

window.addEventListener('beforeinstallprompt', event => {
  // Prevent the default browser prompt
  event.preventDefault();

  // Store the event for later use
  deferredPrompt = event;

  // Show your custom add-to-home-screen popup
  showAddToHomeScreenPopup();
});

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
  deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Reset the deferredPrompt variable
    deferredPrompt = null;

    // Hide the custom popup or banner
    hideAddToHomeScreenPopup();
  });
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
