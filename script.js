function loadWebsite() {
    const url = document.getElementById('urlInput').value;
    if (!url) {
        alert('Please enter a URL');
        return;
    }

    const webview = document.getElementById('webview');
    webview.innerHTML = `<iframe src="https://cors-anywhere.herokuapp.com/${url}" width="100%" height="400px"></iframe>`;
}
