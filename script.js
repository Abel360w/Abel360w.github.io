function loadWebsite() {
    const url = document.getElementById('urlInput').value;
    if (!url) {
        alert('Please enter a URL');
        return;
    }

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('webContent').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('webContent').innerText = 'An error occurred. Please try again.';
        });
}
