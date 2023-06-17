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
